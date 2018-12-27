import Shield1Location1 from './resources/shield/shield_part_1_location_1.png';
import Shield1Location2 from './resources/shield/shield_part_1_location_2.png';
import Shield1Location3 from './resources/shield/shield_part_1_location_3.png';

import Shield2Location1 from './resources/shield/shield_part_2_location_1.png';
import Shield2Location2 from './resources/shield/shield_part_2_location_2.png';
import Shield2Location3 from './resources/shield/shield_part_2_location_2.png';

import Shield3Location1 from './resources/shield/shield_part_3_location_1.png';
import Shield3Location2 from './resources/shield/shield_part_3_location_2.png';
import Shield3Location3 from './resources/shield/shield_part_3_location_2.png';

export const SHIELD_PART_LOCATION_ROOMS = [
	[
		'East Balcony',
		'Grand Staircase',
		'West Balcony'
	], [
		'Study',
		'Library',
		'Library'
	], [
		'East Hallway',
		'Dining Room',
		'Dining Room'
	],
];

export const SHIELD_PART_LOCATION_DESCRIPTIONS = [
	[
		'To the left of the Saug wall buy, resting on a railing',
		'To the right of Sentinel Artifact, resting on a pillar',
		'Resting on the back wall of the west balcony'
	], [
		'On the counter on the right as soon as you enter the Study from Billiards Room',
		'Going down the stairs, it will be on the couch straight ahead',
		'On the broken shelf'
	], [
		'On a chair in the corner of the East Hallway, right before the Dining Room',
		'Under light in the dining room, right before the stairs to go upstairs',
		'Right next to the door that leads out to the Greenhouse'
	],
];

export const SHIELD_PART_LOCATIONS_IMAGES = [
	[Shield1Location1, Shield1Location2, Shield1Location3],
	[Shield2Location1, Shield2Location2, Shield2Location3],
	[Shield3Location1, Shield3Location2, Shield3Location3],
];

export const SHIELD_HEADER = 'shield_header';
export const SHIELD_PART = 'shield_part';

export const SECRET_DOOR_HEADER = 'secret_door_header';
export const SECRET_DOOR = 'secret_door';