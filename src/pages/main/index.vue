<template>
	<div id="map-container"></div>
	<div class="points-info">
		<a-checkbox-group v-model:value="pointsCheckedValue">
			<a-checkbox @change="onChangePoints" v-for="item in BuildingTypeOptions" :value="item.value">
				<div class="flex">
					<img :src="item.icon" alt="" />
					<div>{{ item.label }}</div>
				</div>
			</a-checkbox>
            <a-checkbox @change="onChangePoints" value="all" class="flex"><div>全选</div></a-checkbox>
		</a-checkbox-group>
	</div>
</template>

<script lang="ts" src="./index"></script>
<style src="./index.css" scoped></style>
