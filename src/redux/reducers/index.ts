import {combineReducers} from 'redux';
import trickReducer from './trick';

const rootReducer = combineReducers({trickReducer});

export default rootReducer;