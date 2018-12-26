import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';
import shield from './shieldReducer';
import secretDoor from './secretDoorReducer';

export default (history) => combineReducers({
	router: connectRouter(history),
	shield,
	secretDoor
})
