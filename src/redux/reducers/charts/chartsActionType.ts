import { TData } from "../../../utils/data";


export const LOAD__CHARTS = "LOAD__CHARTS";

export interface ILoadCharts {
    type: typeof LOAD__CHARTS;
    payload: string;
}



export const LOAD__CHARTS_SUCCESS = "LOAD__CHARTS_SUCCESS";

export interface ILoadChartsSuccess {
    type: typeof LOAD__CHARTS_SUCCESS;
    payload: TData;
}


export type TChartsAction = ILoadCharts | ILoadChartsSuccess;