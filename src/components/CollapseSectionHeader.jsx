import React, {Component} from 'react';
import {CardHeader as Header, Button} from 'reactstrap';
import PropTypes from 'prop-types';

class CollapseSectionHeader extends Component {
	render() {
		const {classNames = [''], id, onClick, headerName} = this.props;
		return (
			<Header className={classNames.join(' ')}>
				<Button color="link" id={id} onClick={e => onClick(e)}>
					{headerName}
				</Button>
			</Header>
		)
	}
};

CollapseSectionHeader.propTypes = {
	id: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	headerName: PropTypes.string.isRequired,
	classNames: PropTypes.array
};

export default CollapseSectionHeader;