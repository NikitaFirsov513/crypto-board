import { all, spawn } from "redux-saga/effects";
import assetsSaga from "./assets/assetsSaga";
import { chartsSaga } from "./charts/chartsSaga";
import testSaga from "./test/testSaga";

export default function* rootSaga() {
  const sagas = [testSaga, assetsSaga, chartsSaga];

  yield all(sagas.map((s) => spawn(s)));
}
