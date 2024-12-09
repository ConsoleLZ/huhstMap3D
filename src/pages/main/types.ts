// 建筑物的类型
export enum BuildingTypeEnum {
    functionality,
    sign,
    teaching,
    myLocation,
    dormitory,
    school,
    unknown,
    canteen,
    playground
}

export interface DetailModel {
    img?: string
    description: string
}

export interface PointsDataModel {
    name: string, // 名称
    x: number
    y: number
    icon: any // 图标
    type: BuildingTypeEnum, // 建筑物类型
    detail?: DetailModel // 详情信息
}

export interface LocationModel {
    x: number,
    y: number
}