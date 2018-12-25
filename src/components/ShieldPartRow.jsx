import React, { Component } from 'react';
import { Col, Collapse, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CollapseSectionHeader from "./CollapseSectionHeader";
import ShieldPartLocationRow from "./ShieldPartLocationRow";

import { toggleShieldSubHeader } from "../actions/shieldActions";

import { SHIELD_PART } from "../constants";

const mapStateToProps = state => {
	return {
		shield: state.shield
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({ toggleShieldSubHeader }, dispatch);

class ShieldPartRow extends Component {
	render() {
		const { shieldPartIndex, toggleShieldSubHeader } = this.props;
		return (
			<Row key={shieldPartIndex}>
				<Col lg={{ size: '11', offset: '1' }}>
					<CollapseSectionHeader id={`${SHIELD_PART}_${shieldPartIndex + 1}`}
					                       onClick={e => toggleShieldSubHeader(e.target.id)}
					                       headerName={`Shield Part ${shieldPartIndex + 1} Locations`}
					                       classNames={[
						                       'sub-header',
						                       shieldPartIndex === 2 && this.props.shield[`${SHIELD_PART}_${shieldPartIndex + 1}`] ? 'show' : '',
						                       this.props.shield[`${SHIELD_PART}_${shieldPartIndex}`] ? 'previous-open' : ''
					                       ]}/>

					<Collapse toggler={`#${SHIELD_PART}_${shieldPartIndex + 1}`}
					          isOpen={this.props.shield[`${SHIELD_PART}_${shieldPartIndex + 1}`]}
					          className="sub-collapse-section">
						{[...Array(3).keys()].map(shieldPartLocationIndex => <ShieldPartLocationRow key={shieldPartLocationIndex}
						                                                                            shieldPartIndex={shieldPartIndex}
						                                                                            shieldPartLocationIndex={shieldPartLocationIndex}/>)}
					</Collapse>
				</Col>
			</Row>
		)
	}
};

ShieldPartRow.propTypes = {
	shieldPartIndex: PropTypes.number.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ShieldPartRow);