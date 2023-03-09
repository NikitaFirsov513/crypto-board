import { TData } from "../../../utils/data";
import { delateElemBySymbol } from "../../../utils/delateElemBySymbol";
import {
  DELETE_CHARTS,
  LOAD__CHARTS_ERROR,
  LOAD__CHARTS_SUCCESS,
  TChartsAction,
} from "./chartsActionType";

export interface IChartsState {
  chartsList: TData[];
}

const initialState: IChartsState = {
  chartsList: [],
};

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
    case DELETE_CHARTS: {
      let data = state.chartsList;
      data = delateElemBySymbol(data, action.payload.symbol);
      return {
        ...state,
        chartsList: data,
      };
    }
    case LOAD__CHARTS_ERROR: {
      alert(action.payload.message);
      return { ...state };
    }
    default:
      return state;
  }
}
