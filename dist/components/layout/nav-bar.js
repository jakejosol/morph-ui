// References
import React from 'react';

export default class NavBar extends React.Component {
	getLinks() {
		return this.props.links.map(function (link) {
			return React.createElement(
				'li',
				{ key: link.url },
				React.createElement(
					'a',
					{ href: link.url },
					React.createElement(
						'span',
						null,
						link.title
					)
				)
			);
		});
	}

	render() {
		return React.createElement(
			'nav',
			{ className: 'nav-bar' },
			React.createElement(
				'ul',
				null,
				this.getLinks()
			)
		);
	}
}