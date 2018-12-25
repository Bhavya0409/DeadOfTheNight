import { SHIELD_HEADER, SHIELD_PART } from "../constants";
import { TOGGLE_SHIELD_MAIN_HEADER, TOGGLE_SHIELD_SUB_HEADER } from "../actions/actionTypes";

const initialState = {
	[SHIELD_HEADER]: true,
	[`${SHIELD_PART}_1`]: false,
	[`${SHIELD_PART}_2`]: false,
	[`${SHIELD_PART}_3`]: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_SHIELD_MAIN_HEADER:
			return {
				...state,
				[SHIELD_HEADER]: !state[SHIELD_HEADER],
				[`${SHIELD_PART}_1`]: false,
				[`${SHIELD_PART}_2`]: false,
				[`${SHIELD_PART}_3`]: false,
			};
		case TOGGLE_SHIELD_SUB_HEADER:
			console.log(action.shieldPart);
			return {
				...state,
				[`${action.shieldPart}`]: !state[`${action.shieldPart}`]
			};
		default:
			return state;
	}
}