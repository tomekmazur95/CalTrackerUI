export enum Activity {
    SEDENTARY,
    LIGHTLY_ACTIVE,
    MODERATELY_ACTIVE,
    VERY_ACTIVE,
    EXTRA_ACTIVE
}
export enum Gender {
    MALE,
    FEMALE
}
export enum MeasureType {
    HEIGHT
}
export enum Unit {
    CENTIMETERS
}
export interface Measurement {
    id: number,
    type: MeasureType,
    value: number,
    unit: Unit,
    date: string
}
export interface User {
    id: number,
    userName: string,
    birthDate: string,
    gender: Gender,
    activity: Activity,
    height: Measurement
}
