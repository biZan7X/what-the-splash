import { createAction } from 'redux-act';
import { IMAGES, STATS } from '../constants';

const loadImages = createAction(IMAGES.LOAD);

const setImages = createAction(IMAGES.LOAD_SUCCESS);

const setError = createAction(IMAGES.LOAD_FAIL);

const loadImageStats = createAction(STATS.LOAD);

const setImageStats = createAction(STATS.LOAD_SUCCESS);

const setImageStatsError = createAction(STATS.LOAD_FAIL);

export {
    loadImages,
    setImages,
    setError,
    loadImageStats,
    setImageStats,
    setImageStatsError,
};
