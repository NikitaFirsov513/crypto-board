import { addToLS } from "../../../utils/addToLS";
import { TData } from "../../../utils/data";
import { delateElemBySymbol } from "../../../utils/delateElemBySymbol";
import {
  DELETE_ASSETS,
  INIT_ASSETS_SUCCESS,
  LOAD_ASSETS,
  LOAD_ASSETS_ERROR,
  LOAD_ASSETS_SUCCESS,
  TAssetsAction,
} from "./assetsActionType";

export interface IAssetsState {
  assetsList: TData[];
}
const initialState: IAssetsState = {
  assetsList: [],
};

export default function assetsReducer(
  state: IAssetsState = initialState,
  action: TAssetsAction
) {
  switch (action.type) {
    case LOAD_ASSETS_SUCCESS: {
      console.log(action.payload);
      addToLS("assets", action.payload.meta.symbol);
      return {
        ...state,
        assetsList: [...state.assetsList, action.payload],
      };
    }
    case DELETE_ASSETS: {
      let data = state.assetsList;
      data = delateElemBySymbol(data, action.payload.symbol);
      return {
        ...state,
        assetsList: data,
      };
    }
    case INIT_ASSETS_SUCCESS: {
      return {
        ...state,
        assetsList: action.payload,
      };
    }
    case LOAD_ASSETS_ERROR: {
      alert(action.payload.message);
    }

    default:
      return state;
  }
}
