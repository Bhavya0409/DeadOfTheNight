import React, { Component } from 'react';
import { Col, Collapse, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import CollapseSectionHeader from "./CollapseSectionHeader";
import ShieldPartLocationRow from "./ShieldPartLocationRow";

import { toggleShieldPartCollected, toggleShieldSubHeader } from "../actions/shieldActions";

import { SHIELD_PART } from "../constants";

const mapStateToProps = state => {
	return {
		shield: state.shield
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({ toggleShieldSubHeader, toggleShieldPartCollected }, dispatch);

class ShieldPartRow extends Component {
	render() {
		const { shieldPartIndex, toggleShieldSubHeader, toggleShieldPartCollected, shield } = this.props;
		const collected = shield[`${SHIELD_PART}_${shieldPartIndex + 1}_collected`];
		return (
			<Row key={shieldPartIndex}>
				<Col lg="1" className="pr-0 mt-3 checked-field" onClick={() => toggleShieldPartCollected(shieldPartIndex + 1)}>
					<FontAwesomeIcon icon={collected ? faCheckCircle : faTimesCircle}
					                 size="2x"
					                 color={collected ? 'green' : 'red'}/>
				</Col>
				<Col lg="11" className="pl-0">
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
};

export default connect(mapStateToProps, mapDispatchToProps)(ShieldPartRow);