import { TData } from "../../../utils/data";
import { LOAD__CHARTS_SUCCESS, TChartsAction } from "./chartsActionType";


export interface IChartsState {
    chartsList: TData[];
}

const initialState: IChartsState = {
    chartsList: [],
}

export default function chartsReducer(
    state: IChartsState = initialState,
    action: TChartsAction
) {
    switch (action.type) {
        case LOAD__CHARTS_SUCCESS: {
            console.log(action.payload);

            return {
                ...state,
                chartsList: [...state.chartsList, action.payload],
            };
        }
        default:
            return state;
    }
}