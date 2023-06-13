import { getData } from "../API/api"
import { FETCH_DATA, FETCH_DATA_ERR, FETCH_DATA_SUCC } from "./actionTypes"

const fetchData = () => {
    return {
        type : FETCH_DATA
    }
}

const fetchDataSucc = (places) => {
    return {
        type : FETCH_DATA_SUCC,
        payload : places
    }
}

const fetchDataErr = (err) => {
    return {
        type : FETCH_DATA_ERR,
        payload : err
    }
}

const fetchDataThunk = () => { 
    return async (dispatch, getState) => {
        let state = getState();
        let bounds = state.map.bounds;
        let type = state.places.type;

        dispatch(fetchData());
        try {
            let data = await getData(type, bounds);
            dispatch(fetchDataSucc(data));
        }
        catch(err) {
            dispatch(fetchDataErr(err));
        }
    }
}

export default fetchDataThunk;