import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, Collapse, Row } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

import CollapseSectionHeader from "./CollapseSectionHeader";

const mapStateToProps = state => {
	return {
		test: state.test
	}
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({}, dispatch);
};

/**
 * Reusable container wrapper component that includes a toggle section on the left, as well as a collapsible section on the right with
 * content being the children
 */
class ToggleCompleteCollapseRow extends Component {
	render() {
		const { onToggleComplete, rowId, collected, collapseHeaderId, onHeaderToggle, headerName, isOpen, classNames = [''], children } = this.props;
		return (
			<Row className="toggle-complete-collapse-row">
				<Col lg="1" className="pr-0 mt-3 checked-field" onClick={() => onToggleComplete(rowId)}>
					<FontAwesomeIcon icon={collected ? faCheckCircle : faTimesCircle}
					                 size="2x"
					                 color={collected ? 'green' : 'red'}/>
				</Col>
				<Col lg="11" className="pl-0">
					<CollapseSectionHeader id={collapseHeaderId}
					                       onClick={e => onHeaderToggle(e.target.id)}
					                       headerName={headerName}
					                       classNames={classNames}/>

					<Collapse toggler={collapseHeaderId}
					          isOpen={isOpen}
					          className="sub-collapse-section">
						{children || <p>No content to show...</p>}
					</Collapse>
				</Col>
			</Row>
		)
	}
};

ToggleCompleteCollapseRow.propTypes = {
	rowId: PropTypes.number.isRequired,
	onToggleComplete: PropTypes.func.isRequired,
	collected: PropTypes.bool.isRequired,
	collapseHeaderId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	onHeaderToggle: PropTypes.func.isRequired,
	headerName: PropTypes.string.isRequired,
	isOpen: PropTypes.bool.isRequired,
	classNames: PropTypes.arrayOf(PropTypes.string)
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleCompleteCollapseRow);