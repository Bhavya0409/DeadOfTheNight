import React, { Component } from 'react';
import { Card, CardHeader, Button } from 'reactstrap';

import { SHIELD_HEADER } from "../constants";

class MainSection extends Component {
	render() {
		const { sectionName, onClick } = this.props;
		return (
			<Card className={`main-section ${sectionName}`}>
				<CardHeader className="main-header">
					<Button color="link" id={SHIELD_HEADER} onClick={e => onClick(e)}>
						Shield Part Locations
					</Button>
				</CardHeader>
			</Card>
		)
	}
};

export default MainSection;