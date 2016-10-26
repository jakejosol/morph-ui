// References
import React from 'react';

export default class NavBar extends React.Component {
	getLinks() {
		return this.props.links.map(function(link) {
			return (
				<li key={link.url}>
					<a href={link.url}><span>{link.title}</span></a>
				</li>
			);
		});
	}

	render() {
		return <nav className='nav-bar'>
			<ul>
				{this.getLinks()}
			</ul>
		</nav>;
	}
}