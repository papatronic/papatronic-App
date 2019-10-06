import {
    GET_CITIES_SUCCESS,
    GET_CITIES_FAIL,
    GET_PRICES_SUCCESS,
    GET_PRICES_FAIL
} from '../actions/types';


const INITIAL_STATE = {
    cities: [],
    prices: [],
    message: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_CITIES_SUCCESS:
            return { ...state, cities: action.payload, message: null };
        case GET_CITIES_FAIL:
            return { ...state, cities: [], message: action.payload };
        case GET_PRICES_SUCCESS:
            return { ...state, prices: action.payload, message: null };
        case GET_PRICES_FAIL:
            return { ...state, prices: [], message: action.payload };
        default:
            return state;
    }
}