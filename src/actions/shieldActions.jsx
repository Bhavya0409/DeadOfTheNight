import { TOGGLE_SHIELD_PART_COLLECTED, TOGGLE_SHIELD_MAIN_HEADER, TOGGLE_SHIELD_SUB_HEADER } from "./actionTypes";

export const toggleShieldMainHeader = () => {
	return {
		type: TOGGLE_SHIELD_MAIN_HEADER
	}
};

export const toggleShieldSubHeader = shieldPart => {
	return {
		type: TOGGLE_SHIELD_SUB_HEADER,
		shieldPart
	}
};

export const toggleShieldPartCollected = shieldPart => {
	return {
		type: TOGGLE_SHIELD_PART_COLLECTED,
		shieldPart
	}
};