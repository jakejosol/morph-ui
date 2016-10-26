// References
import React from 'react';

// Components
import Card from './card';

export default class InfoCard extends React.Component {
	render() {
		return <Card 
			padded={true} 
			loading={this.props.loading}
			style={{ minHeight: this.props.cardHeight? this.props.cardHeight : 'auto' }}>
			<h1>{this.props.title}</h1>
			{this.props.subtitle? <h4>{this.props.subtitle}</h4> : ''}
			<hr />
			{this.props.child? this.props.child : this.props.children}
		</Card>;
	}
}