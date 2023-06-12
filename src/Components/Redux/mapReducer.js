import { SET_BOUNDS, SET_CENTER, SET_PLACES } from "./actionTypes";

const initialState = {
    center : {},
    bounds : {ne : {lat : 0, lng : 0}, sw :{lat : 0, lng : 0}},
}

const mapReducer = (state = initialState, action) =>{
    switch(action.type) {
        case SET_CENTER :
            return {
                ...state,
                center : {...action.payload}
            }
        case SET_BOUNDS : 
            return {
                ...state,
                bounds : {...action.payload}
            }

        default : return state;
    }
}

export default mapReducer;