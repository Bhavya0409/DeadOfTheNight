import React, { Component } from 'react';
import '../styles/App.scss';
import { Button, Card, CardHeader, Col, Collapse, Container, Navbar, NavbarBrand, Row } from 'reactstrap';

class App extends Component {

	state = {
		open: true
	};

	onClick = () => {
		this.setState({open: !this.state.open})
	}

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
							<Card>
								<CardHeader>
									<Button color="link" id="toggler" onClick={this.onClick}>
										Collapsible Group Item #1
									</Button>
								</CardHeader>

								<Collapse toggler="#toggler" isOpen={this.state.open}>
									<div id="collapseOne">
										<div className="card-body">
											Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
											moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
											Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
											shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
											proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
											aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
										</div>
									</div>
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
