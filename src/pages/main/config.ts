import { PointsDataModel, BuildingTypeEnum } from './types';
import { message } from 'ant-design-vue';
// 地图标记数据点
/**
 * teaching 教学楼
 * functionality 功能性建筑
 * sign 标志性建筑
 * myLocation 我的位置
 * dormitory 宿舍楼
 * school 校门
 * unknown 功能未知建筑
 * canteen 食堂
 * playground 操场
 */
import functionalityIcon from '@/assets/images/functionality.svg';
import signIcon from '@/assets/images/sign.svg';
import teachingIcon from '@/assets/images/teaching.svg';
import myLocationIcon from '@/assets/images/myLocation.svg';
import dormitoryIcon from '@/assets/images/dormitory.svg';
import schoolIcon from '@/assets/images/school.svg';
import unknownIcon from '@/assets/images/unknown.svg';
import canteenIcon from '@/assets/images/canteen.svg';
import playgroundIcon from '@/assets/images/playground.svg';

export const BuildingTypeOptions = [
	{
		value: BuildingTypeEnum.myLocation,
		label: '我的位置',
		icon: myLocationIcon
	},
	{
		value: BuildingTypeEnum.school,
		label: '校门',
		icon: schoolIcon
	},
	{
		value: BuildingTypeEnum.functionality,
		label: '功能性建筑',
		icon: functionalityIcon
	},
	{
		value: BuildingTypeEnum.sign,
		label: '景点',
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
	},
	{
		value: BuildingTypeEnum.canteen,
		label: '食堂',
		icon: canteenIcon
	},
	{
		value: BuildingTypeEnum.playground,
		label: '操场',
		icon: playgroundIcon
	},
	{
		value: BuildingTypeEnum.unknown,
		label: '功能未知',
		icon: unknownIcon
	}
];

export const pointsData: PointsDataModel[] = [
	{
		name: '东门',
		x: 112.006435,
		y: 27.712191,
		icon: schoolIcon,
		type: BuildingTypeEnum.school
	},
	{
		name: '致远楼',
		x: 112.003957,
		y: 27.713122,
		icon: teachingIcon,
		type: BuildingTypeEnum.teaching,
		detail: {
			img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.HOQBfIe5vf_LsYd4pByQFQHaDf?w=303&h=164&c=7&r=0&o=5&dpr=1.5&pid=1.7',
			description:
				'作为学校的教学楼之一，致远楼为学生提供了必要的学习空间，并且大教室内的照明设施被誉为“照亮梦想的智慧之光”，突显其对学生成长和发展的重要性。'
		}
	},
	{
		name: '图书馆',
		x: 112.002458,
		y: 27.712244,
		icon: functionalityIcon,
		type: BuildingTypeEnum.functionality,
		detail: {
			description: '测试'
		}
	},
	{
		name: '海园广场',
		x: 112.003917,
		y: 27.712187,
		icon: signIcon,
		type: BuildingTypeEnum.sign,
		detail: {
			description: '测试'
		}
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
		x: 112.000184,
		y: 27.712864,
		icon: dormitoryIcon,
		type: BuildingTypeEnum.dormitory
	},
	{
		name: '学生宿舍14',
		x: 112.000188,
		y: 27.712501,
		icon: dormitoryIcon,
		type: BuildingTypeEnum.dormitory
	},
	{
		name: '学生宿舍13',
		x: 112.000811,
		y: 27.712903,
		icon: dormitoryIcon,
		type: BuildingTypeEnum.dormitory
	},
	{
		name: '学生宿舍12',
		x: 112.000811,
		y: 27.712472,
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
	},
	{
		name: '毓师园',
		x: 112.005673,
		y: 27.71176,
		icon: signIcon,
		type: BuildingTypeEnum.sign
	},
	{
		name: '仁德楼',
		x: 112.006117,
		y: 27.711301,
		icon: unknownIcon,
		type: BuildingTypeEnum.unknown
	},
	{
		name: '尚贤楼',
		x: 112.006475,
		y: 27.711561,
		icon: unknownIcon,
		type: BuildingTypeEnum.unknown
	},
	{
		name: '养根楼',
		x: 112.00246,
		y: 27.711144,
		icon: teachingIcon,
		type: BuildingTypeEnum.teaching,
		detail: {
			description: '测试'
		}
	},
	{
		name: '淳和楼',
		x: 112.00259,
		y: 27.710612,
		icon: canteenIcon,
		type: BuildingTypeEnum.canteen,
		detail: {
			description: '测试'
		}
	},
	{
		name: '汇鼎餐厅（新食堂）',
		x: 112.000202,
		y: 27.71331,
		icon: canteenIcon,
		type: BuildingTypeEnum.canteen,
		detail: {
			description: '测试'
		}
	},
	{
		name: '宇光球场',
		x: 112.003409,
		y: 27.71052,
		icon: playgroundIcon,
		type: BuildingTypeEnum.playground
	},
	{
		name: '惠丰球场',
		x: 112.001425,
		y: 27.708393,
		icon: playgroundIcon,
		type: BuildingTypeEnum.playground
	},
	{
		name: '田径场',
		x: 112.001128,
		y: 27.710072,
		icon: playgroundIcon,
		type: BuildingTypeEnum.playground
	},
	{
		name: '匠成楼',
		x: 112.00442,
		y: 27.7104,
		icon: unknownIcon,
		type: BuildingTypeEnum.unknown
	},
	{
		name: '成德楼',
		x: 112.006006,
		y: 27.712843,
		icon: unknownIcon,
		type: BuildingTypeEnum.unknown
	},
	{
		name: '雅韵楼',
		x: 112.006053,
		y: 27.713718,
		icon: unknownIcon,
		type: BuildingTypeEnum.unknown
	},
	{
		name: '碧梧楼',
		x: 112.006488,
		y: 27.713545,
		icon: unknownIcon,
		type: BuildingTypeEnum.unknown
	},
	{
		name: '博达楼',
		x: 112.001411,
		y: 27.707492,
		icon: unknownIcon,
		type: BuildingTypeEnum.unknown
	},
	{
		name: '逸夫楼',
		x: 112.002325,
		y: 27.708187,
		icon: teachingIcon,
		type: BuildingTypeEnum.teaching
	},
	{
		name: '阳光公寓1栋',
		x: 112.00039,
		y: 27.715329,
		icon: dormitoryIcon,
		type: BuildingTypeEnum.dormitory
	},
	{
		name: '阳光公寓2栋',
		x: 112.001297,
		y: 27.715306,
		icon: dormitoryIcon,
		type: BuildingTypeEnum.dormitory
	},
	{
		name: '阳光公寓3栋',
		x: 112.000387,
		y: 27.715016,
		icon: dormitoryIcon,
		type: BuildingTypeEnum.dormitory
	},
	{
		name: '阳光公寓4栋',
		x: 112.001278,
		y: 27.715016,
		icon: dormitoryIcon,
		type: BuildingTypeEnum.dormitory
	},
	{
		name: '阳光公寓5栋',
		x: 112.000352,
		y: 27.714569,
		icon: dormitoryIcon,
		type: BuildingTypeEnum.dormitory
	}
];