import { call, takeEvery, put, apply, take, select, fork } from 'redux-saga/effects';
import { LOAD_TEST, LOAD_TEST_SUCCESS } from '../../reducers/test/testActionType';



export function* loadTest(): any {

    yield put({
        type: LOAD_TEST_SUCCESS,
        payload: {
            data: "LOAD_TEST_SUCCESS"
        },
    });


}
export default function* testSaga() {
    yield takeEvery(LOAD_TEST, loadTest);
}