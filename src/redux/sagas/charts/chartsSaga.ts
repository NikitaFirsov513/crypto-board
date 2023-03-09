import { put, takeEvery } from "redux-saga/effects";
import { data } from "../../../utils/data";
import {
  IInitCharts,
  ILoadCharts,
  INIT_CHARTS,
  INIT_CHARTS_SUCCESS,
  LOAD__CHARTS,
  LOAD__CHARTS_ERROR,
  LOAD__CHARTS_SUCCESS,
} from "../../reducers/charts/chartsActionType";
import axios from "axios";

export function* loadCharts({ type, payload }: ILoadCharts): any {
  const options = {
    method: "GET",
    url: "https://twelve-data1.p.rapidapi.com/time_series",
    params: {
      symbol: payload,
      interval: "1day",
      outputsize: "15",
      format: "json",
    },
    headers: {
      "X-RapidAPI-Key": "359a6b3d03mshc54663a64e1b0e3p14eee2jsnc4e8be17f412",
      "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
    },
  };

  const myData = yield axios.request(options);
  console.log(myData.data);
  if (myData.data.status === "ok") {
    yield put({
      type: LOAD__CHARTS_SUCCESS,
      payload: myData.data,
    });
  } else {
    yield put({
      type: LOAD__CHARTS_ERROR,
      payload: { message: "Ошибка загрузки" },
    });
  }
}

function* initCharts({ type, payload }: IInitCharts): any {
  if (payload.symbol === null || payload.symbol === "") return;

  const options = {
    method: "GET",
    url: "https://twelve-data1.p.rapidapi.com/time_series",
    params: {
      symbol: payload.symbol,
      interval: "1day",
      outputsize: "15",
      format: "json",
    },
    headers: {
      "X-RapidAPI-Key": "359a6b3d03mshc54663a64e1b0e3p14eee2jsnc4e8be17f412",
      "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
    },
  };
  const myData = yield axios.request(options);
  if (payload.symbol.split(", ").length > 1) {
    let mas = [];
    for (let key of Object.keys(myData.data)) {
      mas.push(myData.data[key]);
    }
    console.log(mas);
    yield put({
      type: INIT_CHARTS_SUCCESS,
      payload: mas,
    });
  } else {
    yield put({
      type: LOAD__CHARTS_SUCCESS,
      payload: myData.data,
    });
  }
}

export function* chartsSaga() {
  yield takeEvery(LOAD__CHARTS, loadCharts);
  yield takeEvery(INIT_CHARTS, initCharts);
}
