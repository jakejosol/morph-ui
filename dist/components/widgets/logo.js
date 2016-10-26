// References
import React from 'react';

export default class Logo extends React.Component {
	render() {
		return React.createElement(
			'div',
			{ className: 'logo' },
			React.createElement(
				'a',
				{ href: '/' },
				React.createElement(
					'h1',
					null,
					this.props.url ? React.createElement('img', { src: this.props.url }) : this.props.title
				)
			)
		);
	}
}