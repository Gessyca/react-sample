 import { takeLatest, put } from 'redux-saga/effects';
 import {Creators as CourseActions} from './course';
 import {Types as CourseTypes} from './course';

function * helloWorldSaga() {
    yield put(CourseActions.setMessage('Chamou redux saga'));
}

export default function * root() {
   yield takeLatest(CourseTypes.HELLO_WORLD_SAGA, helloWorldSaga);
}