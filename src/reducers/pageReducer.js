import { createReducer } from 'redux-act';
import { setImages } from '../actions';

const pageReducer = createReducer(
    {
        [setImages]: state => state + 1,
    },
    1,
);

export default pageReducer;
