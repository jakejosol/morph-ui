// References
import React from 'react';

export default class NavBar extends React.Component {
	render() {
		return <nav className='nav-bar'>
			<ul>
				{this.props.children}
			</ul>
		</nav>;
	}
}