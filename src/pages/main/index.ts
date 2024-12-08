import { defineComponent, onMounted, reactive, ref, toRefs, watch } from 'vue';
import { pointsData, BuildingTypeOptions } from './config';
import { PointsDataModel, BuildingTypeEnum, LocationModel } from './types';
import ModalDetailComp from './comps/modal-detail/index.vue';
import { Modal, message } from 'ant-design-vue';

export default defineComponent({
	components: {
		ModalDetailComp
	},
	setup() {
		const pointsCheckedValue: number[] = [];
		BuildingTypeOptions.forEach(item => {
			pointsCheckedValue.push(item.value);
		});
		const state = reactive({
			pointsCheckedValue,
			indeterminate: true,
			checkAll: false,
			isPlanning: false, // 是否开启线路规划
			walking: null
		});

		const pointsMarkes = [
			{
				type: BuildingTypeEnum.functionality,
				marker: []
			},
			{
				type: BuildingTypeEnum.sign,
				marker: []
			},
			{
				type: BuildingTypeEnum.teaching,
				marker: []
			},
			{
				type: BuildingTypeEnum.myLocation,
				marker: []
			},
			{
				type: BuildingTypeEnum.dormitory,
				marker: []
			}
		];

		const components = {
			modalDetailRef: ref<InstanceType<typeof ModalDetailComp>>(null)
		};

		let map: any = null;
		const methods = {
			// 地图初始化
			init() {
				map = new AMap.Map('map-container', {
					viewMode: '3D',
					zooms: [16, 20],
					pitch: 30,
					zoom: 18,
					center: [112.003962, 27.711996],
					rotateEnable: false,
					pitchEnable: false,
					rotation: 90, //初始地图顺时针旋转的角度
					building: false // 关闭建筑物名称显示
				});
				// 只显示道路和兴趣点，隐藏建筑物名字等其他元素
				map.setFeatures(['building', 'road', 'bg']);
				// 读取标记点数据
				pointsData.forEach(item => {
					pointsMarkes.forEach(mark => {
						if (item.type === mark.type) {
							mark.marker.push(methods.generateMark(item));
						}
					});
					methods.generateText(item);
				});

				pointsMarkes.forEach(item => {
					map.add(item.marker);
				});
				map.on('click', e => {
					const terminal = {
						x: e.lnglat.getLng(),
						y: e.lnglat.getLat()
					};
					const myLocation = pointsData.find(item => item.type === BuildingTypeEnum.myLocation);
					const formatMyLocation = {
						x: myLocation.x,
						y: myLocation.y
					};
					if (state.isPlanning) {
						methods.routePlanning(formatMyLocation, terminal);
					}
				});
			},
			// 控制线路规划是否开启
			onControlPanel(value: boolean) {
				const content: string = value ? '开启' : '关闭';
				Modal.confirm({
					title: '提示',
					content: `是否${content}线路规划(开启后点击地图任意位置即可)`,
					okText: '确认',
					cancelText: '取消',
					onOk() {
						state.isPlanning = value;
						if(!value && state.walking){
							state.walking.clear(); // 清除之前的步行规划
						}
					}
				});
			},
			// 线路规划(步行)
			routePlanning(myLocation: LocationModel, terminal: LocationModel) {
				if (state.walking) {
					state.walking.clear(); // 清除之前的步行规划
				}
				//构造路线导航类
				state.walking = new AMap.Walking({
					map,
				});

				// 根据起终点经纬度规划驾车导航路线
				state.walking.search(
					new AMap.LngLat(myLocation.x, myLocation.y),
					new AMap.LngLat(terminal.x, terminal.y),
					function (status, result) {
						if (status === 'complete') {
							message.success('绘制路线完成')
						} else {
							message.error('绘制路线失败')
						}
					}
				);
			},
			// 全选功能
			onCheckAllChange(e: any) {
				state.indeterminate = false;
				state.pointsCheckedValue = e.target.checked ? pointsCheckedValue : [];
				if (e.target.checked) {
					pointsMarkes.forEach(item => {
						map.remove(item.marker);
					});
					pointsMarkes.forEach(item => {
						map.add(item.marker);
					});
				} else {
					pointsMarkes.forEach(item => {
						map.remove(item.marker);
					});
				}
			},
			// 改变标记点的显示和隐藏
			onChangePoints(e) {
				if (e.target.checked) {
					pointsMarkes.forEach(item => {
						if (item.type === e.target.value) {
							map.add(item.marker);
						}
					});
				} else {
					pointsMarkes.forEach(item => {
						if (item.type === e.target.value) {
							map.remove(item.marker);
						}
					});
				}
			},
			// 生成图标标记
			generateMark(data: PointsDataModel) {
				const marker = new AMap.Marker({
					position: new AMap.LngLat(data.x, data.y), //经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
					title: data.name,
					icon: data.icon,
					offset: new AMap.Pixel(-12, -30) //相对于基点的偏移位置
				});

				marker.customAttribute = data.detail; // 自定义属性

				//创建点标记的点击事件
				marker.on('click', function (e) {
					if (e.target.customAttribute) {
						components.modalDetailRef.value.open(e.target.customAttribute, data.name);
					}
				});

				return marker;
			},

			// 生成纯文本标记
			generateText(data: PointsDataModel) {
				var text = new AMap.Text({
					text: data.name, //标记显示的文本内容
					anchor: 'center', //设置文本标记锚点位置
					cursor: 'pointer', //指定鼠标悬停时的鼠标样式。
					style: {
						'font-size': '14px',
						position: 'relative',
						top: '5px'
					},
					position: [data.x, data.y] //点标记在地图上显示的位置
				});
				text.setMap(map); //将文本标记设置到地图上
			}
		};

		onMounted(() => {
			methods.init();
		});

		watch(
			() => state.pointsCheckedValue,
			val => {
				state.indeterminate = !!val.length && val.length < pointsCheckedValue.length;
				state.checkAll = val.length === pointsCheckedValue.length;
			}
		);

		return {
			BuildingTypeEnum,
			BuildingTypeOptions,
			...toRefs(state),
			...methods,
			...components
		};
	}
});
