import {createStore, applyMiddleware} from 'redux';
import mapReducer from './mapReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import {combineReducers} from 'redux'
import placeReducer from './placeReducer';
import thunk from 'redux-thunk';

const store = createStore(combineReducers({
    map : mapReducer,
    places : placeReducer
}), composeWithDevTools(applyMiddleware(thunk)));

export default store