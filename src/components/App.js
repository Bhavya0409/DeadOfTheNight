import React, { Component } from 'react';
import { Card, Col, Collapse, Container, Navbar, NavbarBrand, Row } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CollapseSectionHeader from './CollapseSectionHeader';

import { toggleShieldMainHeader, toggleShieldSubHeader } from "../actions/shieldActions";

import '../styles/App.scss';

import { SHIELD_HEADER, SHIELD_PART } from "../constants";
import ShieldPartRow from "./ShieldPartRow";

const mapStateToProps = state => {
	return {
		shield: state.shield
	}
};

const mapDispatchToProps = dispatch => bindActionCreators({ toggleShieldMainHeader, toggleShieldSubHeader }, dispatch);

class App extends Component {

	render() {
		const {shield} = this.props;
		const collected = shield[`${SHIELD_PART}_1_collected`] && shield[`${SHIELD_PART}_2_collected`] && shield[`${SHIELD_PART}_3_collected`];
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
								                       onClick={() => this.props.toggleShieldMainHeader()}
								                       headerName={"Shield"}
								                       classNames={['main-header', collected ? 'collected' : '']}/>

								<Collapse toggler={`#${SHIELD_HEADER}`} isOpen={this.props.shield[SHIELD_HEADER]} className="collapse-section">
									{[...Array(3).keys()].map(shieldPartIndex => <ShieldPartRow key={shieldPartIndex}
									                                                            shieldPartIndex={shieldPartIndex}/>)}
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
