// References
import React from 'react';

// Components
import Logo from '../widgets/logo';
import NavBar from './nav-bar';
import Column from '../layout/column';
import InputGroup from '../form/input-group';

export default class AppBar extends React.Component {
	render() {
		return <header className='app-bar'>
			<Logo url={this.props.logo} title={this.props.title} />
			{this.props.children? <div className='controls'>
				{this.props.children}
			</div> : ''}
			<NavBar links={this.props.links} />
		</header>;
	}
}