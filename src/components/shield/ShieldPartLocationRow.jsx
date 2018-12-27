import React, { Component } from 'react';
import { CardHeader, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';

import { SHIELD_PART_LOCATION_DESCRIPTIONS, SHIELD_PART_LOCATION_ROOMS, SHIELD_PART_LOCATIONS_IMAGES } from "../../constants";

class ShieldPartLocationRow extends Component {
	render() {
		const { shieldPartIndex, shieldPartLocationIndex } = this.props;
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
								<img src={SHIELD_PART_LOCATIONS_IMAGES[shieldPartIndex][shieldPartLocationIndex]}/>
							</Col>
						</Row>
					</CardHeader>
				</Col>
			</Row>
		)
	}
};

ShieldPartLocationRow.propTypes = {
	shieldPartIndex: PropTypes.number.isRequired,
	shieldPartLocationIndex: PropTypes.number.isRequired
}

export default ShieldPartLocationRow;