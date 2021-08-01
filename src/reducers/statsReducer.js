import { createReducer } from 'redux-act';
import { loadImageStats, setImageStats, setImageStatsError } from '../actions';

const statsReducer = createReducer(
    {
        [loadImageStats]: (state, payload) => ({
            ...state,
            [payload.id]: {
                isLoading: true,
                downloads: null,
                error: false,
            },
        }),
        [setImageStats]: (state, payload) => ({
            ...state,
            [payload.id]: {
                isLoading: false,
                downloads: payload.downloads,
                error: false,
            },
        }),
        [setImageStatsError]: (state, payload) => ({
            ...state,
            [payload.id]: {
                isLoading: false,
                downloads: null,
                error: true,
            },
        }),
    },
    {}, //^ initial state
);

export default statsReducer;
