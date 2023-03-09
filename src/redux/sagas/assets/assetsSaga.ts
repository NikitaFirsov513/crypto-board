import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { data } from "../../../utils/data";
import {
  ILoadAssets,
  LOAD_ASSETS,
  LOAD_ASSETS_SUCCESS,
  LOAD_ASSETS_ERROR,
  IInitAssets,
  INIT_ASSETS,
  INIT_ASSETS_SUCCESS
} from "../../reducers/assets/assetsActionType";

function* loadAssets({ type, payload }: ILoadAssets): any {

  const options = {
    method: 'GET',
    url: 'https://twelve-data1.p.rapidapi.com/time_series',
    params: { symbol: payload, interval: '1day', outputsize: '15', format: 'json' },
    headers: {
      'X-RapidAPI-Key': '359a6b3d03mshc54663a64e1b0e3p14eee2jsnc4e8be17f412',
      'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
    }
  };

  const myData = yield axios.request(options);
  console.log(myData.data)
  if (myData.data.status === "ok") {
    yield put({
      type: LOAD_ASSETS_SUCCESS,
      payload: myData.data
    })
  }
  else {
    yield put({
      type: LOAD_ASSETS_ERROR,
      payload: { message: "Ошибка загрузки" }
    })
  }

}

function* initAssets({ type, payload }: IInitAssets): any {

  if (payload.symbol === null || payload.symbol === '')
    return;

  const options = {
    method: 'GET',
    url: 'https://twelve-data1.p.rapidapi.com/time_series',
    params: { symbol: payload.symbol, interval: '1day', outputsize: '15', format: 'json' },
    headers: {
      'X-RapidAPI-Key': '359a6b3d03mshc54663a64e1b0e3p14eee2jsnc4e8be17f412',
      'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
    }
  };
  const myData = yield axios.request(options);

  console.log(payload.symbol)
  console.log(myData)

  if (payload.symbol.split(', ').length > 1) {
    let mas = [];
    for (let key of Object.keys(myData.data)) {
      mas.push(myData.data[key])
    }
    console.log(mas)
    yield put({
      type: INIT_ASSETS_SUCCESS,
      payload: mas
    })
  }
  else {
    yield put({
      type: LOAD_ASSETS_SUCCESS,
      payload: myData.data
    })
  }
}



export default function* assetsSaga() {
  yield takeEvery(LOAD_ASSETS, loadAssets);
  yield takeEvery(INIT_ASSETS, initAssets);

}
