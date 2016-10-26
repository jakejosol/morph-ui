// References
import React from 'react';

// Components
import Logo from '../widgets/logo';
import NavBar from './nav-bar';
import Column from '../layout/column';
import InputGroup from '../form/input-group';

export default class AppBar extends React.Component {
	render() {
		return React.createElement(
			'header',
			{ className: 'app-bar' },
			React.createElement(Logo, { url: this.props.logo, title: this.props.title }),
			this.props.children ? React.createElement(
				'div',
				{ className: 'controls' },
				this.props.children
			) : '',
			React.createElement(NavBar, { links: this.props.links })
		);
	}
}