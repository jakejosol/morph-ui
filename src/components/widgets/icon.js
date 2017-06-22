// References
import React from 'react';

export default class Icon extends React.Component {

	isSolo() {
		return this.props.solo? ' solo' : '';
	}

	render() {
		return <i className={'icon fa fa-' + this.props.name + this.isSolo() }></i>;
	}
}