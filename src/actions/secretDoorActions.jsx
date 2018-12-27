import { TOGGLE_SECRET_DOOR_MAIN_HEADER, TOGGLE_SECRET_DOOR_SUB_HEADER, TOGGLE_SECRET_DOOR_COMPLETED } from "./actionTypes";

export const toggleSecretDoorMainHeader = () => {
	return {
		type: TOGGLE_SECRET_DOOR_MAIN_HEADER
	}
};

/**
 * @param secretDoorId number id of the secret door to be toggling
 * @returns {{type: string, secretDoorId: *}}
 */
export const toggleSecretDoorSubHeader = secretDoorId => {
	return {
		type: TOGGLE_SECRET_DOOR_SUB_HEADER,
		secretDoorId
	}
};

export const toggleSecretDoorCompleted = secretDoorId => {
	return {
		type: TOGGLE_SECRET_DOOR_COMPLETED,
		secretDoorId
	}
}