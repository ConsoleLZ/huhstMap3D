<template>
	<div id="map-container"></div>
	<div class="points-info">
		<div class="margin-bottom-10">
			<a-checkbox v-model:checked="checkAll" :indeterminate="indeterminate" @change="onCheckAllChange">
				全选
			</a-checkbox>
			<a-button type="primary" size="small" class="margin-right-10" @click="onControlPanel(true)">开启线路规划</a-button>
			<a-button type="primary" size="small" class="margin-right-10" @click="onControlPanel(false)">关闭线路规划</a-button>
			<span>线路规划: {{ isPlanning ? '开启' : '关闭' }}</span>
		</div>
		<a-checkbox-group v-model:value="pointsCheckedValue">
			<a-checkbox class="flex" @change="onChangePoints" v-for="item in BuildingTypeOptions" :value="item.value">
				<div class="flex">
					<img :src="item.icon" alt="" />
					<div>{{ item.label }}</div>
				</div>
			</a-checkbox>
		</a-checkbox-group>
	</div>

	<modal-detail-comp ref="modalDetailRef" />
</template>

<script lang="ts" src="./index"></script>
<style src="./index.css" scoped></style>
