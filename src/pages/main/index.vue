<template>
	<div id="map-container"></div>
	<div class="points-info">
		<div class="margin-bottom-10">
			<a-checkbox v-model:checked="checkAll" :indeterminate="indeterminate" @change="onCheckAllChange">
				全选
			</a-checkbox>
			<a-button type="primary" size="small" class="margin-right-10" @click="onControlMenu(true)">
				功能菜单
			</a-button>
			<span class="margin-right-10" style="font-weight: 600;">线路规划: {{ isPlanning ? '开启' : '关闭' }}</span>
			<span style="font-weight: 600;">地图模式: {{ isMap2D ? '2D模式' : '3D模式' }}</span>
		</div>
		<a-checkbox-group v-model:value="pointsCheckedValue">
			<a-checkbox class="flex" @change="onChangePoints" v-for="item in BuildingTypeOptions" :value="item.value">
				<div class="flex" style="gap: 3px">
					<img :src="item.icon" alt="" />
					<div>{{ item.label }}</div>
				</div>
			</a-checkbox>
		</a-checkbox-group>
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
	<loading-comp v-if="isLoading" />
</template>

<script lang="ts" src="./index"></script>
<style src="./index.css" scoped></style>
