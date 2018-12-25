import React, { Component } from 'react';
import { Button, Card, CardHeader, Col, Collapse, Container, Navbar, NavbarBrand, Row } from 'reactstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import CollapseSectionHeader from './CollapseSectionHeader';

import {toggleShieldMainHeader, toggleShieldSubHeader} from "../actions/shieldActions";

import '../styles/App.scss';

import {
	SHIELD_PART_LOCATION_ROOMS,
	SHIELD_PART_LOCATION_DESCRIPTIONS,
	SHIELD_PART_LOCATIONS_IMAGES,
	SHIELD_PART,
	SHIELD_HEADER
} from "../constants";

const mapStateToProps = state => {
	return {
		shield: state.shield
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({toggleShieldMainHeader, toggleShieldSubHeader}, dispatch);

class App extends Component {

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
								<CollapseSectionHeader id={SHIELD_HEADER}
								                       onClick={() => this.props.toggleShieldMainHeader()}
								                       headerName={"Shield Part Locations"}/>

								<Collapse toggler={`#${SHIELD_HEADER}`} isOpen={this.props.shield[SHIELD_HEADER]} className="collapse-section">
									{[...Array(3).keys()].map(shieldPartIndex => {
										const locationShieldParts = SHIELD_PART_LOCATIONS_IMAGES[shieldPartIndex];
										return (
											<Row key={shieldPartIndex}>
												<Col lg={{ size: '11', offset: '1' }}>
													<CollapseSectionHeader id={`${SHIELD_PART}_${shieldPartIndex + 1}`}
													                       onClick={e => this.props.toggleShieldSubHeader(e.target.id)}
													                       headerName={`Shield Part ${shieldPartIndex + 1} Locations`}
													                       classNames={[
													                       	'sub-header',
														                       shieldPartIndex === 2 && this.props.shield[`${SHIELD_PART}_${shieldPartIndex + 1}`] ? 'show' : '',
														                       this.props.shield[`${SHIELD_PART}_${shieldPartIndex}`] ? 'previous-open' : ''
													                       ]}/>

													<Collapse toggler={`#${SHIELD_PART}_${shieldPartIndex + 1}`}
													          isOpen={this.props.shield[`${SHIELD_PART}_${shieldPartIndex + 1}`]}
													          className="sub-collapse-section">
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
