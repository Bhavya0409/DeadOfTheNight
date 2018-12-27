import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, Collapse } from 'reactstrap';

import CollapseSectionHeader from "../reusable/CollapseSectionHeader";

import { toggleSecretDoorMainHeader, toggleSecretDoorSubHeader, toggleSecretDoorCompleted } from "../../actions/secretDoorActions";

import { SECRET_DOOR, SECRET_DOOR_HEADER } from "../../constants";
import ToggleCompleteCollapseRow from "../reusable/ToggleCompleteCollapseRow";

const mapStateToProps = state => {
	return {
		secretDoor: state.secretDoor
	}
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ toggleSecretDoorMainHeader, toggleSecretDoorSubHeader, toggleSecretDoorCompleted }, dispatch);
};

class SecretDoorSection extends Component {
	render() {
		const { secretDoor, toggleSecretDoorMainHeader, toggleSecretDoorSubHeader, toggleSecretDoorCompleted } = this.props;
		const allSecretDoorsCompleted = secretDoor[`${SECRET_DOOR}_0_completed`] && secretDoor[`${SECRET_DOOR}_1_completed`] && secretDoor[`${SECRET_DOOR}_2_completed`];
		return (
			<Card className="secret-door-section">
				<CollapseSectionHeader id={SECRET_DOOR_HEADER}
				                       onClick={() => toggleSecretDoorMainHeader()}
				                       headerName={"Secret Doors"}
				                       classNames={['main-header', allSecretDoorsCompleted ? 'completed' : '']}/>
				<Collapse toggler={`#${SECRET_DOOR_HEADER}`} isOpen={secretDoor[SECRET_DOOR_HEADER]} className="collapse-section">
					<ToggleCompleteCollapseRow headerName="Bookcases"
					                           collapseHeaderId="bookcases"
					                           onToggleComplete={() => toggleSecretDoorCompleted(0)}
					                           isOpen={secretDoor[`${SECRET_DOOR}_0_open`]}
					                           completed={secretDoor[`${SECRET_DOOR}_0_completed`]}
					                           classNames={['sub-header']}
					                           onHeaderToggle={() => toggleSecretDoorSubHeader(0)}>
						<p>Bookcases Section</p>
					</ToggleCompleteCollapseRow>

					<ToggleCompleteCollapseRow headerName="Billiards Room"
					                           collapseHeaderId="billiards"
					                           onToggleComplete={() => toggleSecretDoorCompleted(1)}
					                           isOpen={secretDoor[`${SECRET_DOOR}_1_open`]}
					                           completed={secretDoor[`${SECRET_DOOR}_1_completed`]}
					                           classNames={['sub-header']}
					                           onHeaderToggle={() => toggleSecretDoorSubHeader(1)}>
						<p>Billiards Section</p>
					</ToggleCompleteCollapseRow>

					<ToggleCompleteCollapseRow headerName="Cellar"
					                           collapseHeaderId="cellar"
					                           onToggleComplete={() => toggleSecretDoorCompleted(2)}
					                           isOpen={secretDoor[`${SECRET_DOOR}_2_open`]}
					                           completed={secretDoor[`${SECRET_DOOR}_2_completed`]}
					                           classNames={['sub-header']}
					                           onHeaderToggle={() => toggleSecretDoorSubHeader(2)}>
						<p>Cellar Section</p>
					</ToggleCompleteCollapseRow>
				</Collapse>
			</Card>
		)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(SecretDoorSection);