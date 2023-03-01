import { put, takeEvery } from "redux-saga/effects";
import { data } from "../../../utils/data";
import {
  ILoadAssets,
  LOAD_ASSETS,
  LOAD_ASSETS_SUCCESS,
} from "../../reducers/assets/assetsActionType";

export function* loadAssets({ type, payload }: ILoadAssets): any {
  yield put({
    type: LOAD_ASSETS_SUCCESS,
    payload: data,
  });
}
export default function* assetsSaga() {
  yield takeEvery(LOAD_ASSETS, loadAssets);
}
