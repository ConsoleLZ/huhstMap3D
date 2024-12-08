import {PointsDataModel, BuildingTypeEnum} from './types'
// 地图标记数据点
/**
 * teaching 教学楼
 * functionality 功能性建筑
 * sign 标志性建筑
 * myLocation 我的位置
 * dormitory 宿舍楼
 */
import functionalityIcon from '@/assets/images/functionality.svg'
import signIcon from '@/assets/images/sign.svg'
import teachingIcon from '@/assets/images/teaching.svg'
import myLocationIcon from '@/assets/images/myLocation.svg'
import dormitoryIcon from '@/assets/images/dormitory.svg'

export const BuildingTypeOptions = [
    {
        value: BuildingTypeEnum.myLocation,
        label: '我的位置',
        icon: myLocationIcon
    },
    {
        value: BuildingTypeEnum.functionality,
        label: '功能性建筑',
        icon: functionalityIcon
    },
    {
        value: BuildingTypeEnum.sign,
        label: '标志性建筑',
        icon: signIcon
    },
    {
        value: BuildingTypeEnum.teaching,
        label: '教学楼',
        icon: teachingIcon
    },
    {
        value: BuildingTypeEnum.dormitory,
        label: '宿舍楼',
        icon: dormitoryIcon
    }
]

export const pointsData: PointsDataModel[] = [
	{
		name: '我的位置',
		x: 112.00107,
		y: 27.713394,
		icon: myLocationIcon,
        type: BuildingTypeEnum.myLocation
	},
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
	},
	{
		name: '甘澍楼',
		x: 112.003469,
		y: 27.713451,
		icon: teachingIcon,
        type: BuildingTypeEnum.teaching
	},
	{
		name: '学而楼',
		x: 112.00445,
		y: 27.713451,
		icon: teachingIcon,
        type: BuildingTypeEnum.teaching
	},
	{
		name: '学生宿舍6',
		x: 112.002498,
		y: 27.713208,
		icon: dormitoryIcon,
        type: BuildingTypeEnum.dormitory
	},
	{
		name: '学生宿舍7',
		x: 112.002455,
		y: 27.712858,
		icon: dormitoryIcon,
        type: BuildingTypeEnum.dormitory
	},
	{
		name: '学生宿舍8',
		x: 112.002455,
		y: 27.713477,
		icon: dormitoryIcon,
        type: BuildingTypeEnum.dormitory
	},
	{
		name: '学生宿舍1',
		x: 112.003385,
		y: 27.710213,
		icon: dormitoryIcon,
        type: BuildingTypeEnum.dormitory
	},
	{
		name: '学生宿舍2',
		x: 112.003385,
		y: 27.709894,
		icon: dormitoryIcon,
        type: BuildingTypeEnum.dormitory
	},
	{
		name: '学生宿舍3',
		x: 112.003385,
		y: 27.70952,
		icon: dormitoryIcon,
        type: BuildingTypeEnum.dormitory
	},
	{
		name: '学生宿舍4',
		x: 112.003385,
		y: 27.709262,
		icon: dormitoryIcon,
        type: BuildingTypeEnum.dormitory
	},
	{
		name: '学生宿舍5',
		x: 112.003385,
		y: 27.708976,
		icon: dormitoryIcon,
        type: BuildingTypeEnum.dormitory
	},
	{
		name: '学生宿舍9',
		x: 112.002679,
		y: 27.709843,
		icon: dormitoryIcon,
        type: BuildingTypeEnum.dormitory
	},
	{
		name: '学生宿舍10',
		x: 112.002437,
		y: 27.709466,
		icon: dormitoryIcon,
        type: BuildingTypeEnum.dormitory
	},
	{
		name: '学生宿舍15',
		x: 112.000846,
		y: 27.713441,
		icon: dormitoryIcon,
        type: BuildingTypeEnum.dormitory
	},
	{
		name: '学生宿舍14',
		x: 112.000846,
		y: 27.713192,
		icon: dormitoryIcon,
        type: BuildingTypeEnum.dormitory
	},
	{
		name: '学生宿舍13',
		x: 112.001509,
		y: 27.713422,
		icon: dormitoryIcon,
        type: BuildingTypeEnum.dormitory
	},
	{
		name: '学生宿舍12',
		x: 112.001444,
		y: 27.713192,
		icon: dormitoryIcon,
        type: BuildingTypeEnum.dormitory
	},
	{
		name: '学生宿舍16',
		x: 111.9995,
		y: 27.707213,
		icon: dormitoryIcon,
        type: BuildingTypeEnum.dormitory
	},
	{
		name: '学生宿舍17',
		x: 111.999547,
		y: 27.70752,
		icon: dormitoryIcon,
        type: BuildingTypeEnum.dormitory
	}
];