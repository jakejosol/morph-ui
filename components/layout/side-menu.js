// References
import React from 'react';

// Component
import Icon from '../widgets/icon';

export default class SideMenu extends React.Component {

	isActive(name) {
		return this.props.current == name? 'active' : '';
	}

	getLinks() {
		var self = this;
		return this.props.routes.map(function(link) {
			return <a key={link.url} className={self.isActive(link.name)} href={link.url}>
				{link.icon? <Icon name={link.icon} /> : '' }<span className='label'>{link.title}</span>
			</a>;
		});
	}

	render() {
		return <nav className='side-menu'>
			{this.getLinks()}
		</nav>;
	}	
}