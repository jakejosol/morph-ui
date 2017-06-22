// References
import React from 'react';

export default class AppBar extends React.Component {
	render() {
		return <header className='app-bar'>
            {this.props.home}
			{this.props.children}
		</header>;
	}
}