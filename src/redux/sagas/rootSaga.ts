import { all, spawn } from "redux-saga/effects";
import assetsSaga from "./assets/assetsSaga";
import testSaga from "./test/testSaga";

export default function* rootSaga() {
  const sagas = [testSaga, assetsSaga];

  yield all(sagas.map((s) => spawn(s)));
}
