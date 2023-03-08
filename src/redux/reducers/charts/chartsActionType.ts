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

export const LOAD__CHARTS_ERROR = "LOAD__CHARTS_ERROR";

export interface ILoadChartsError {
    type: typeof LOAD__CHARTS_ERROR;
    payload: { message: string };
}
export type TChartsAction = ILoadCharts | ILoadChartsSuccess | ILoadChartsError;