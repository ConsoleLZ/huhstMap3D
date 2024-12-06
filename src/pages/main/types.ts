// 建筑物的类型
export enum BuildingTypeEnum {
    functionality,
    sign,
    teaching
}

export interface PointsDataModel {
    name: string,
    x: number
    y: number
    icon: any
    type: BuildingTypeEnum
}