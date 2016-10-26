// References
import React from 'react';

// Components
import Icon from '../widgets/icon';

export default class CardLoader extends React.Component {
	isActive() {
		return this.props.active ? ' active' : '';
	}

	render() {
		return React.createElement(
			'div',
			{ className: 'card-loader' + this.isActive() },
			React.createElement(
				'div',
				{ className: 'loader-block' },
				React.createElement(
					'div',
					{ className: 'loader-icon' },
					React.createElement(Icon, { className: 'loader', name: this.props.icon })
				)
			)
		);
	}
}