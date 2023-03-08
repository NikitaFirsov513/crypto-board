import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { data } from "../../../utils/data";
import {
  ILoadAssets,
  LOAD_ASSETS,
  LOAD_ASSETS_SUCCESS,
} from "../../reducers/assets/assetsActionType";

export function* loadAssets({ type, payload }: ILoadAssets): any {

  const options = {
    method: 'GET',
    url: 'https://twelve-data1.p.rapidapi.com/time_series',
    params: { symbol: payload, interval: '1day', outputsize: '15', format: 'json' },
    headers: {
      'X-RapidAPI-Key': 'fd9bc853e7msh05804e7889f0368p133b41jsn3822ed265a05',
      'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
    }
  };

  const myData = yield axios.request(options)
  console.log(myData.data)
  yield put({
    type: LOAD_ASSETS_SUCCESS,
    payload: myData.data,
  });
}
export default function* assetsSaga() {
  yield takeEvery(LOAD_ASSETS, loadAssets);
}
