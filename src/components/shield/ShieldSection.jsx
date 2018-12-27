import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Collapse, Card } from 'reactstrap';

import CollapseSectionHeader from "../reusable/CollapseSectionHeader";
import ToggleCompleteCollapseRow from "../reusable/ToggleCompleteCollapseRow";
import ShieldPartLocationRow from "./ShieldPartLocationRow";

import { toggleShieldMainHeader, toggleShieldPartCollected, toggleShieldSubHeader } from "../../actions/shieldActions";

import { SHIELD_HEADER, SHIELD_PART } from "../../constants";

const mapStateToProps = state => {
	return {
		shield: state.shield
	}
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ toggleShieldMainHeader, toggleShieldPartCollected, toggleShieldSubHeader }, dispatch);
};

class ShieldSection extends Component {
	render() {
		const { shield, toggleShieldMainHeader, toggleShieldPartCollected, toggleShieldSubHeader } = this.props;
		const allShieldPartsCollected = shield[`${SHIELD_PART}_1_collected`] && shield[`${SHIELD_PART}_2_collected`] && shield[`${SHIELD_PART}_3_collected`];
		return (
			<Card className="shield-section">
				<CollapseSectionHeader id={SHIELD_HEADER}
				                       onClick={() => toggleShieldMainHeader()}
				                       headerName={"Shield"}
				                       classNames={['main-header', allShieldPartsCollected ? 'completed' : '']}/>

				<Collapse toggler={`#${SHIELD_HEADER}`} isOpen={shield[SHIELD_HEADER]} className="collapse-section">
					{[...Array(3).keys()].map(shieldPartIndex => {
						return <ToggleCompleteCollapseRow key={shieldPartIndex}
						                                  onToggleComplete={() => toggleShieldPartCollected(shieldPartIndex + 1)}
						                                  completed={shield[`${SHIELD_PART}_${shieldPartIndex + 1}_collected`]}
						                                  collapseHeaderId={`${SHIELD_PART}_${shieldPartIndex + 1}`}
						                                  onHeaderToggle={id => toggleShieldSubHeader(id)}
						                                  headerName={`Shield Part ${shieldPartIndex + 1} Locations`}
						                                  isOpen={shield[`${SHIELD_PART}_${shieldPartIndex + 1}`]}
						                                  classNames={[
							                                  'sub-header',
							                                  shieldPartIndex === 2 && shield[`${SHIELD_PART}_${shieldPartIndex + 1}`] ? 'show' : '',
							                                  shield[`${SHIELD_PART}_${shieldPartIndex}`] ? 'previous-open' : ''
						                                  ]}>
							{[...Array(3).keys()].map(shieldPartLocationIndex => <ShieldPartLocationRow key={shieldPartLocationIndex}
							                                                                            shieldPartIndex={shieldPartIndex}
							                                                                            shieldPartLocationIndex={shieldPartLocationIndex}/>)}
						</ToggleCompleteCollapseRow>
					})}
				</Collapse>
			</Card>
		)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ShieldSection);