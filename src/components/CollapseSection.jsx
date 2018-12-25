import React, {Component} from 'react';
import {Collapse} from 'reactstrap';
import PropTypes from 'prop-types';

class CollapseSection extends Component {
	render() {
		const {togglerId, isOpen, classNames} = this.props;
		return (
			<Collapse toggler={togglerId} isOpen={isOpen} className={classNames.join(' ')}>
				{this.props.children}
			</Collapse>
		)
	}
};

CollapseSection.propTypes = {
	togglerId: PropTypes.string.isRequired,
	isOpen: PropTypes.bool.isRequired,
	classNames: PropTypes.array
};

export default CollapseSection;