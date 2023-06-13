import { CHANGE_TYPE, FETCH_DATA, FETCH_DATA_ERR, FETCH_DATA_SUCC, SET_RATING } from "./actionTypes";

const initialState = {
    places : [],
    loading : false,
    err : null,
    type : 'restaurants',
    rating : 0
}

const placeReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA :
            return {
                ...state,
                loading : true
            }

        case FETCH_DATA_SUCC : 
            return {
                ...state,
                loading : false,
                places : [...action.payload]
            }

        case FETCH_DATA_ERR : 
            return {
                ...state,
                loading : false,
                err : action.payload
            }

        case CHANGE_TYPE : 
            return {
                ...state,
                type : action.payload
            }
        case SET_RATING :
            return {
                ...state,
                rating : action.payload
            }

        default : return state;
    }
}

export default placeReducer;