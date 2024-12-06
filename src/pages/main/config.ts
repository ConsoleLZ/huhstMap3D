import {PointsDataModel, BuildingTypeEnum} from './types'
// 地图标记数据点
/**
 * teaching 教学楼建筑
 * functionality 功能性建筑
 * sign 标志性建筑
 */
import functionalityIcon from '@/assets/images/functionality.svg'
import signIcon from '@/assets/images/sign.svg'
import teachingIcon from '@/assets/images/teaching.svg'

export const pointsData: PointsDataModel[] = [
	{
		name: '致远楼',
		x: 112.003957,
		y: 27.713122,
		icon: teachingIcon,
        type: BuildingTypeEnum.teaching
	},
	{
		name: '图书馆',
		x: 112.002458,
		y: 27.712244,
		icon: functionalityIcon,
        type: BuildingTypeEnum.functionality
	},
	{
		name: '海园广场',
		x: 112.003917,
		y: 27.712187,
		icon: signIcon,
        type: BuildingTypeEnum.sign
	},
	{
		name: '百全楼',
		x: 112.003425,
		y: 27.711112,
		icon: teachingIcon,
        type: BuildingTypeEnum.teaching
	},
	{
		name: '播馨楼',
		x: 112.004475,
		y: 27.711147,
		icon: teachingIcon,
        type: BuildingTypeEnum.teaching
	},
	{
		name: '明德楼',
		x: 112.005534,
		y: 27.711167,
		icon: functionalityIcon,
        type: BuildingTypeEnum.functionality
	}
];