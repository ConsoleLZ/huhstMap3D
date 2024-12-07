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
        type: BuildingTypeEnum.teaching,
		detail: {
			img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.HOQBfIe5vf_LsYd4pByQFQHaDf?w=303&h=164&c=7&r=0&o=5&dpr=1.5&pid=1.7',
			description: '作为学校的教学楼之一，致远楼为学生提供了必要的学习空间，并且大教室内的照明设施被誉为“照亮梦想的智慧之光”，突显其对学生成长和发展的重要性。'
		}
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