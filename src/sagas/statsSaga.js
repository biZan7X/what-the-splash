import { call, fork, put, take } from 'redux-saga/effects';

import {
    loadImageStats,
    setImages,
    setImageStats,
    setImageStatsError,
} from '../actions';
import { fetchImageStats } from '../api';

function* handleStatsRequest(id) {
    //! in case of error, re-try will be done 3 times
    for (let i = 0; i < 3; i++) {
        try {
            yield put(loadImageStats(id)); //* creates an empty stats object
            const res = yield call(fetchImageStats, id);
            const downloads = res.downloads.total;
            yield put(setImageStats({ id, downloads })); //* adds stats to that object
            return true; //^ exit
        } catch (e) {}
    }

    yield put(setImageStatsError(id));
}

function* watchStatsRequest() {
    const { payload } = yield take(setImages); //! getting back the entire action along with it's payload
    const images = payload;

    //^ yield does not works under forEach, hence for loop is the only choice
    for (let i = 0; i < images.length; i++) {
        yield fork(handleStatsRequest, images[i].id); //* fork is non blocking so all the image's handler is exe parallely
    }
}

export default watchStatsRequest();
