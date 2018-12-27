import React, { Component } from 'react';
import { Col, Container, Navbar, NavbarBrand, Row } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import '../styles/App.scss';

import ShieldSection from "./shield/ShieldSection";

const mapStateToProps = state => {
	return {}
};

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

class App extends Component {

	render() {
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
							<ShieldSection/>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
