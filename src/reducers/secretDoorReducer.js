import { SECRET_DOOR_HEADER, SECRET_DOOR } from "../constants";
import { TOGGLE_SECRET_DOOR_MAIN_HEADER, TOGGLE_SECRET_DOOR_SUB_HEADER, TOGGLE_SECRET_DOOR_COMPLETED } from "../actions/actionTypes";

const initialState = {
	[SECRET_DOOR_HEADER]: false,
	[`${SECRET_DOOR}_0_open`]: false,
	[`${SECRET_DOOR}_1_open`]: false,
	[`${SECRET_DOOR}_2_open`]: false,
	[`${SECRET_DOOR}_0_completed`]: false,
	[`${SECRET_DOOR}_1_completed`]: false,
	[`${SECRET_DOOR}_2_completed`]: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_SECRET_DOOR_MAIN_HEADER:
			return {
				...state,
				[SECRET_DOOR_HEADER]: !state[SECRET_DOOR_HEADER]
			};
		case TOGGLE_SECRET_DOOR_SUB_HEADER:
			return {
				...state,
					[`${SECRET_DOOR}_${action.secretDoorId}_open`]: !state[`${SECRET_DOOR}_${action.secretDoorId}_open`]
			};
		case TOGGLE_SECRET_DOOR_COMPLETED:
			return {
				...state,
				[`${SECRET_DOOR}_${action.secretDoorId}_completed`]: !state[`${SECRET_DOOR}_${action.secretDoorId}_completed`]
			};
		default:
			return state;
	}
}