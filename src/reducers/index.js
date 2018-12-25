import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';
import shield from './shieldReducer';

export default (history) => combineReducers({
	router: connectRouter(history),
	shield
})
