// References
import React from 'react';

export default class Container extends React.Component {
	render() {
		return React.createElement(
			'div',
			{ className: 'container' },
			this.props.children
		);
	}
}