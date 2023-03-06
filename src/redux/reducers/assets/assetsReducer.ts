import { TData } from "../../../utils/data";
import {
  LOAD_ASSETS,
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
      return {
        ...state,
        assetsList: [...state.assetsList, action.payload],
      };
    }
    default:
      return state;
  }
}
