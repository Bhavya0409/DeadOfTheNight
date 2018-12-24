import React, { Component } from 'react';
import '../styles/App.scss';
import { Button, Card, CardHeader, Col, Collapse, Container, Navbar, NavbarBrand, Row } from 'reactstrap';

import {
	SHIELD_PART_LOCATION_ROOMS,
	SHIELD_PART_LOCATION_DESCRIPTIONS,
	SHIELD_PART_LOCATIONS_IMAGES,
	SHIELD_PART,
	SHIELD_HEADER
} from "../constants";

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
																					<p
																						className="location-room">{SHIELD_PART_LOCATION_ROOMS[shieldPartIndex][shieldPartLocationIndex]}</p>
																					<p
																						className="location-description">{SHIELD_PART_LOCATION_DESCRIPTIONS[shieldPartIndex][shieldPartLocationIndex]}</p>
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
