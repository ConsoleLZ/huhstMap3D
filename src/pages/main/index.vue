<template>
	<div id="map-container"></div>
	<div class="points-info">
		<div style="margin-bottom: 10px;">
			<a-checkbox v-model:checked="checkAll" :indeterminate="indeterminate" @change="onCheckAllChange">
				全选
			</a-checkbox>
		</div>
		<a-checkbox-group v-model:value="pointsCheckedValue">
			<a-checkbox @change="onChangePoints" v-for="item in BuildingTypeOptions" :value="item.value">
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
