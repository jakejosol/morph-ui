// References
import React from 'react';

export default class Radio extends React.Component {

	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
	}

	onChange() {
		if (this.props.onChange) this.props.onChange(this.props.value);
	}

	render() {
		return React.createElement(
			'label',
			{ className: 'radio', htmlFor: 'radio-' + this.props.name + '-' + this.props.value },
			React.createElement('input', {
				type: 'radio',
				name: this.props.name + '[]',
				id: 'radio-' + this.props.name + '-' + this.props.value,
				value: this.props.value,
				checked: this.props.active,
				onChange: this.onChange }),
			React.createElement(
				'span',
				null,
				this.props.label
			)
		);
	}
}