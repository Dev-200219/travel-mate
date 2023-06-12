import { CHANGE_TYPE, FETCH_DATA, FETCH_DATA_ERR, FETCH_DATA_SUCC } from "./actionTypes";

const initialState = {
    places : [],
    loading : false,
    err : null,
    type : 'restaurants'
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

        default : return state;
    }
}

export default placeReducer;