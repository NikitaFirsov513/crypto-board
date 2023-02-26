import { all, spawn } from 'redux-saga/effects';
import testSaga from './test/testSaga';

export default function* rootSaga() {
    const sagas = [testSaga];

    yield all(sagas.map(s => spawn(s)));
}