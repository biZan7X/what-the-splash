import { createReducer } from 'redux-act';
import { loadImages, setError, setImages } from '../actions';
import { IMAGES } from '../constants';

const errorReducer = createReducer(
    {
        [setError]: (state, payload) => payload,
        [loadImages]: state => null,
        [setImages]: state => null,
    },
    null,
);

export default errorReducer;
