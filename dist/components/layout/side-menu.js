// References
import React from 'react';

// Component
import Icon from '../widgets/icon';

export default class SideMenu extends React.Component {

	isActive(name) {
		return this.props.current == name ? 'active' : '';
	}

	getLinks() {
		var self = this;
		return this.props.routes.map(function (link) {
			return React.createElement(
				'a',
				{ key: link.url, className: self.isActive(link.name), href: link.url },
				link.icon ? React.createElement(Icon, { name: link.icon }) : '',
				React.createElement(
					'span',
					{ className: 'label' },
					link.title
				)
			);
		});
	}

	render() {
		return React.createElement(
			'nav',
			{ className: 'side-menu' },
			this.getLinks()
		);
	}
}