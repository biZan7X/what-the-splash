import { createReducer } from 'redux-act';
import { loadImages, setError, setImages } from '../actions';

const loadingReducer = createReducer(
    {
        [loadImages]: state => true,
        [setImages]: state => false,
        [setError]: state => false,
    },
    false,
);

export default loadingReducer;
