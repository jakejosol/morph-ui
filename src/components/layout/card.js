// References
import React from 'react';

// Components
import CardLoader from './card-loader';

export default class Card extends React.Component {
	isPadded() {
		return this.props.padded? ' padded' : '';
	}

	render() {
		return <div className='card-block'>
			<div className={'card' + this.isPadded()} style={this.props.style}>
				{this.props.children}
				<CardLoader icon='refresh fa-spin' active={this.props.loading} />
			</div>
		</div>;
	}
}