// References
import React from 'react';

// Components
import Card from './card';

export default class InfoCard extends React.Component {
	render() {
		return React.createElement(
			Card,
			{
				padded: true,
				loading: this.props.loading,
				style: { minHeight: this.props.cardHeight ? this.props.cardHeight : 'auto' } },
			React.createElement(
				'h1',
				null,
				this.props.title
			),
			this.props.subtitle ? React.createElement(
				'h4',
				null,
				this.props.subtitle
			) : '',
			React.createElement('hr', null),
			this.props.child ? this.props.child : this.props.children
		);
	}
}