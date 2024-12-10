<template>
	<div id="map-container"></div>
	<div class="points-info">
		<div class="margin-bottom-10">
			<a-button type="primary" size="small" class="margin-right-10" @click="onControlMenu(true)">
				地图设置
			</a-button>
			<a-button type="primary" size="small" class="margin-right-10" @click="onShowUser">查看贡献者</a-button>
			<a-popover class="margin-right-10" title="娄底市天气信息" placement="bottom">
				<template #content>
					<p>天气：{{ weatherInfo.weather }}</p>
					<p>温度：{{ weatherInfo.temperature }}℃</p>
					<p>风向：{{ weatherInfo.windDirection }}风</p>
					<p>风力：{{ weatherInfo.windPower }}级</p>
					<p>空气湿度：{{ weatherInfo.humidity }}</p>
					<p>发布时间：{{ weatherInfo.reportTime }}</p>
				</template>
				<a-button size="small" type="primary">天气信息</a-button>
			</a-popover>
			<span class="margin-right-10" style="font-weight: 600">线路规划: {{ isPlanning ? '开启' : '关闭' }}</span>
			<span style="font-weight: 600">地图模式: {{ isMap2D ? '2D模式' : '3D模式' }}</span>
		</div>
		<a-collapse v-model:activeKey="activeKey" ghost>
			<a-collapse-panel key="1" header="展开位置点信息">
				<a-checkbox-group v-model:value="pointsCheckedValue">
					<a-checkbox class="flex" v-model:checked="checkAll" :indeterminate="indeterminate" @change="onCheckAllChange">
						全选
					</a-checkbox>
					<a-checkbox
						class="flex"
						@change="onChangePoints"
						v-for="item in BuildingTypeOptions"
						:value="item.value"
					>
						<div class="flex" style="gap: 3px">
							<img :src="item.icon" alt="" />
							<div>{{ item.label }}</div>
						</div>
					</a-checkbox>
				</a-checkbox-group>
				<div class="building-list">
					<div v-for="item in pointsData" @click="onChangeCenter(item.x, item.y)" :key="item.name">
						{{ item.name }}
					</div>
				</div>
			</a-collapse-panel>
		</a-collapse>
	</div>
	<a-drawer :width="500" title="功能菜单" placement="left" :open="isMenuShow" @close="onControlMenu(false)">
		<div class="margin-bottom-10">
			<span>线路规划：</span>
			<a-button type="primary" size="small" class="margin-right-10" @click="onControlPanel(true)">
				开启线路规划
			</a-button>
			<a-button type="primary" size="small" class="margin-right-10" @click="onControlPanel(false)">
				关闭线路规划
			</a-button>
		</div>
		<div>
			<span>地图类型：</span>
			<a-button type="primary" size="small" class="margin-right-10" @click="onChangeMapType">
				切换为{{ isMap2D ? '3D' : '2D' }}地图
			</a-button>
		</div>
	</a-drawer>

	<modal-detail-comp ref="modalDetailRef" />
	<modal-contribute-user-comp ref="modalContributeUserRef" />
	<loading-comp v-if="isLoading" />
</template>

<script lang="ts" src="./index"></script>
<style src="./index.css" scoped></style>
<style>
.ant-collapse > .ant-collapse-item > .ant-collapse-header {
	color: #000000 !important;
	padding: 0 !important;
}
.ant-collapse .ant-collapse-content > .ant-collapse-content-box {
	padding: 0 !important;
	margin-top: 5px;
}
</style>
