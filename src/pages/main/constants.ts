// 地图标记数据点
/**
 * teaching 教学楼建筑
 * functionality 功能性建筑
 * sign 标志性建筑
 */
import functionalityIcon from '@/assets/images/functionality.svg'
import signIcon from '@/assets/images/sign.svg'
import teachingIcon from '@/assets/images/teaching.svg'
import {BuildingTypeEnum} from './types'

export const BuildingTypeOptions = [
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
        label: '教学性建筑',
        icon: teachingIcon
    }
]