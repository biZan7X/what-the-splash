import { takeEvery } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { fetchImages } from '../api';

import { setImages, setError, loadImages } from '../actions/index';

const getImages = state => state.nextPage;

function* handleImagesLoad() {
    try {
        const page = yield select(getImages);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

function* watchImagesLoad() {
    yield takeEvery(loadImages, handleImagesLoad);
}

export default watchImagesLoad();
