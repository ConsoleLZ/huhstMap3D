import { defineComponent, onMounted, reactive, toRefs, watch } from 'vue';
import { BuildingTypeOptions } from './constants';
import { pointsData } from './config';
import { PointsDataModel, BuildingTypeEnum } from './types';

export default defineComponent({
	setup() {
		const pointsCheckedValue: number[] = [];
		BuildingTypeOptions.forEach(item => {
			pointsCheckedValue.push(item.value);
		});
		const state = reactive({
			pointsCheckedValue,
			indeterminate: true,
			checkAll: false
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
			}
		];

		let map: any = null;
		const methods = {
			// 地图初始化
			init() {
				map = new AMap.Map('map-container', {
					viewMode: '3D',
					zooms: [16, 20],
					pitch: 50,
					zoom: 17,
					center: [112.002842, 27.711096],
					rotateEnable: false,
					pitchEnable: false,
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
					offset: new AMap.Pixel(-12, -30), //相对于基点的偏移位置
					customAttribute: '111'
				});

				marker.customAttribute = data.detail; // 自定义属性

				//创建点标记的点击事件
				marker.on('click', function (e) {
					console.log('你点击了Marker', e.target.customAttribute);
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
						top: '14px'
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
			...methods
		};
	}
});
