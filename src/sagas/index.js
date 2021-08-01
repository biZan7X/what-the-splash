import { all } from 'redux-saga/effects';

import imagesSaga from './imagesSaga';
import statsSaga from './statsSaga';

export default function*() {
    yield all([imagesSaga, statsSaga]); //^ similar to promise.all(), lets the middlewares execute parallely
}
