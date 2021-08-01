import { createReducer } from 'redux-act';
import { setImages } from '../actions';
import { IMAGES } from '../constants';

const imagesReducer = createReducer(
    {
        [setImages]: (state, payload) => [...state, ...payload],
    },
    [],
);

export default imagesReducer;
