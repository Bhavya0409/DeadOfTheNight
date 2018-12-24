import React, { Component } from 'react';
import '../styles/App.scss';
import { Button, Card, CardHeader, Col, Collapse, Container, Navbar, NavbarBrand, Row } from 'reactstrap';

import Shield1Location1 from '../resources/shield/shield_part_1_location_1.png';
import Shield1Location2 from '../resources/shield/shield_part_1_location_2.png';
import Shield1Location3 from '../resources/shield/shield_part_1_location_3.png';

const SHIELD_HEADER = 'shield_header';
const SHIELD_PART = 'shield_part';

const SHIELD_PART_LOCATIONS_IMAGES = [
	[Shield1Location1, Shield1Location2, Shield1Location3],
	['', '', ''],
	['', '', ''],
];

const SHIELD_PART_LOCATION_ROOMS = [
	[
		'East Balcony',
		'Grand Staircase',
		'West Balcony'
	], [
		'East Balcony',
		'Grand Staircase',
		'West Balcony'
	], [
		'East Balcony',
		'Grand Staircase',
		'West Balcony'
	],
];

const SHIELD_PART_LOCATION_DESCRIPTIONS = [
	[
		'To the left of the Saug wall buy, resting on a railing',
		'To the right of Sentinel Artifact, resting on a pillar',
		'Resting on the back wall of the west balcony'
	], [
		'To the left of the Saug wall buy, resting on a railing',
		'To the right of Sentinel Artifact, resting on a pillar',
		'Resting on the back wall of the west balcony'
	], [
		'To the left of the Saug wall buy, resting on a railing',
		'To the right of Sentinel Artifact, resting on a pillar',
		'Resting on the back wall of the west balcony'
	],
];

class App extends Component {

	state = {
		[SHIELD_HEADER]: true,
		[`${SHIELD_PART}_1`]: false,
		[`${SHIELD_PART}_2`]: false,
		[`${SHIELD_PART}_3`]: false,
	};

	onClick = (e) => {
		this.setState({ [e.target.id]: !this.state[e.target.id] })
	};

	render() {
		console.log(this.state);
		return (
			<div className="App">

				<div className="header">
					<Navbar expand="lg">
						<NavbarBrand href="#" className="mx-auto">Dead Of The Night Guide</NavbarBrand>
					</Navbar>
				</div>

				<Container>
					<Row>
						<Col lg="12">
							<Card className="main-section shield">
								<CardHeader className="main-header">
									<Button color="link" id={SHIELD_HEADER} onClick={e => this.onClick(e)}>
										Shield Part Locations
									</Button>
								</CardHeader>

								<Collapse toggler={`#${SHIELD_HEADER}`} isOpen={this.state[SHIELD_HEADER]} className="collapse-section">
									{[...Array(3).keys()].map(shieldPartIndex => {
										const locationShieldParts = SHIELD_PART_LOCATIONS_IMAGES[shieldPartIndex];
										return (
											<Row key={shieldPartIndex}>
												<Col lg={{ size: '11', offset: '1' }}>
													<CardHeader
														className={`sub-header ${shieldPartIndex === 2 && this.state[`${SHIELD_PART}_${shieldPartIndex + 1}`] ? 'show' : ''} ${this.state[`${SHIELD_PART}_${shieldPartIndex}`] ? 'previous-open' : ''}`}>
														<Button color="link" id={`${SHIELD_PART}_${shieldPartIndex + 1}`} onClick={e => this.onClick(e)}>
															Shield Part {shieldPartIndex + 1} Locations
														</Button>
													</CardHeader>

													<Collapse toggler={`#${SHIELD_PART}_${shieldPartIndex + 1}`}
													          isOpen={this.state[`${SHIELD_PART}_${shieldPartIndex + 1}`]} className="sub-collapse-section">
														{[...Array(3).keys()].map(shieldPartLocationIndex => {
															return (
																<Row key={shieldPartLocationIndex}>
																	<Col lg={{ size: '11', offset: '1' }}>
																		<CardHeader className="sub-sub-header">
																			<Row>
																				<Col lg="3">
																					<p className="location-room">{SHIELD_PART_LOCATION_ROOMS[shieldPartIndex][shieldPartLocationIndex]}</p>
																					<p className="location-description">{SHIELD_PART_LOCATION_DESCRIPTIONS[shieldPartIndex][shieldPartLocationIndex]}</p>
																				</Col>
																				<Col lg="9">
																					<img src={locationShieldParts[shieldPartLocationIndex]}/>
																				</Col>
																			</Row>
																		</CardHeader>
																	</Col>
																</Row>
															)
														})}
													</Collapse>
												</Col>
											</Row>
										)
									})}
								</Collapse>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default App;
