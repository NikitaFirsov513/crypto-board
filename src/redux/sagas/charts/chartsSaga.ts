import { put, takeEvery } from "redux-saga/effects";
import { data } from "../../../utils/data";
import { ILoadCharts, LOAD__CHARTS, LOAD__CHARTS_SUCCESS } from "../../reducers/charts/chartsActionType";


export function* loadCharts({ type, payload }: ILoadCharts) {

    yield put({
        type: LOAD__CHARTS_SUCCESS,
        payload: data
    })


}
export function* chartsSaga() {
    yield takeEvery(LOAD__CHARTS, loadCharts);
}