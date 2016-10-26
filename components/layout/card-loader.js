// References
import React from 'react';

// Components
import Icon from '../widgets/icon';

export default class CardLoader extends React.Component {
	isActive() {
		return this.props.active? ' active' : '';
	}

	render() {
		return <div className={'card-loader' + this.isActive()}>
			<div className='loader-block'>
				<div className='loader-icon'>
					<Icon className='loader' name={this.props.icon} />
				</div>
			</div>
		</div>;
	}
}