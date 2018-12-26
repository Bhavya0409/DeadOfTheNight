import { SECRET_DOOR_HEADER } from "../constants";
import { TOGGLE_SECRET_DOOR_MAIN_HEADER } from "../actions/actionTypes";

const initialState = {
	[SECRET_DOOR_HEADER]: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_SECRET_DOOR_MAIN_HEADER:
			return {
				...state,
				[SECRET_DOOR_HEADER]: !state[SECRET_DOOR_HEADER]
			};
		default:
			return state;
	}
}