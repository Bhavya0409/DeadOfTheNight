import React, { Component } from 'react';
import '../styles/App.scss';
import { Button, Card, CardBody, CardHeader, Col, Collapse, Container, Navbar, NavbarBrand, Row } from 'reactstrap';

import ShieldPart1 from '../resources/shield/shield_part_1.png';
import ShieldPart2 from '../resources/shield/shield_part_2.png';
import ShieldPart3 from '../resources/shield/shield_part_3.png';

const SHIELD_HEADER = 'shield_header';
const SHIELD_PART = 'shield_part';

class App extends Component {

	state = {
		[SHIELD_HEADER]: true,
		[`${SHIELD_PART}_1`]: false,
		[`${SHIELD_PART}_2`]: false,
		[`${SHIELD_PART}_3`]: false,
	};

	onClick = (e) => {
		this.setState({[e.target.id]: !this.state[e.target.id]})
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
									{[...Array(3).keys()].map(index => {
										return (
											<Row key={index}>
												<Col lg={{size: '11', offset: '1'}}>
													<CardHeader className={`sub-header ${index === 2 && this.state[`${SHIELD_PART}_${index + 1}`] ? 'show' : ''} ${this.state[`${SHIELD_PART}_${index}`] ? 'previous-open' : ''}`}>
														<Button color="link" id={`${SHIELD_PART}_${index + 1}`} onClick={e => this.onClick(e)}>
															Shield Part {index + 1} Locations
														</Button>
													</CardHeader>

													<Collapse toggler={`#${SHIELD_PART}_${index + 1}`} isOpen={this.state[`${SHIELD_PART}_${index + 1}`]} className="sub-collapse-section">
														{[...Array(3).keys()].map(index => {
															return (
																<Row key={index}>
																	<Col lg={{size: '11', offset: '1'}}>
																		<CardHeader className="sub-sub-header">
																			<Button color="link">
																				Blah
																			</Button>
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
