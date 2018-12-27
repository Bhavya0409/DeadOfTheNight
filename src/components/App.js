import React, { Component } from 'react';
import { Card, Col, Collapse, Container, Navbar, NavbarBrand, Row } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CollapseSectionHeader from './CollapseSectionHeader';

import { toggleShieldMainHeader, toggleShieldPartCollected, toggleShieldSubHeader } from "../actions/shieldActions";
import { toggleSecretDoorMainHeader } from "../actions/secretDoorActions";

import '../styles/App.scss';

import { SHIELD_HEADER, SHIELD_PART } from "../constants";
import ToggleCompleteCollapseRow from "./ToggleCompleteCollapseRow";
import ShieldPartLocationRow from "./ShieldPartLocationRow";

const mapStateToProps = state => {
	return {
		shield: state.shield,
		secretDoor: state.secretDoor
	}
};

const mapDispatchToProps = dispatch => bindActionCreators({
	toggleShieldMainHeader,
	toggleShieldSubHeader,
	toggleSecretDoorMainHeader,
	toggleShieldPartCollected
}, dispatch);

class App extends Component {

	render() {
		const { shield, toggleShieldMainHeader, toggleShieldSubHeader, toggleShieldPartCollected } = this.props;
		const allShieldPartsCollected = shield[`${SHIELD_PART}_1_collected`] && shield[`${SHIELD_PART}_2_collected`] && shield[`${SHIELD_PART}_3_collected`];
		return (
			<div className="App">
				<div className="header">
					<Navbar expand="lg">
						<NavbarBrand href="#" className="mx-auto">Dead Of The Night Guide</NavbarBrand>
					</Navbar>
				</div>

				<Container className="mb-3">
					<Row>
						<Col lg="12">
							<Card className="main-section shield">
								<CollapseSectionHeader id={SHIELD_HEADER}
								                       onClick={() => toggleShieldMainHeader()}
								                       headerName={"Shield"}
								                       classNames={['main-header', allShieldPartsCollected ? 'collected' : '']}/>

								<Collapse toggler={`#${SHIELD_HEADER}`} isOpen={shield[SHIELD_HEADER]} className="collapse-section">
									{[...Array(3).keys()].map(shieldPartIndex => {
										return <ToggleCompleteCollapseRow key={shieldPartIndex}
										                                  rowId={shieldPartIndex}
										                                  onToggleComplete={() => toggleShieldPartCollected(shieldPartIndex + 1)}
										                                  collected={shield[`${SHIELD_PART}_${shieldPartIndex + 1}_collected`]}
										                                  collapseHeaderId={`${SHIELD_PART}_${shieldPartIndex + 1}`}
										                                  onHeaderToggle={id => toggleShieldSubHeader(id)}
										                                  headerName={`Shield Part ${shieldPartIndex + 1} Locations`}
										                                  isOpen={shield[`${SHIELD_PART}_${shieldPartIndex + 1}`]}
										                                  classNames={[
											                                  'sub-header',
											                                  shieldPartIndex === 2 && shield[`${SHIELD_PART}_${shieldPartIndex + 1}`] ? 'show' : '',
											                                  this.props.shield[`${SHIELD_PART}_${shieldPartIndex}`] ? 'previous-open' : ''
										                                  ]}>
											{[...Array(3).keys()].map(shieldPartLocationIndex => <ShieldPartLocationRow key={shieldPartLocationIndex}
											                                                                            shieldPartIndex={shieldPartIndex}
											                                                                            shieldPartLocationIndex={shieldPartLocationIndex}/>)}
										</ToggleCompleteCollapseRow>
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
