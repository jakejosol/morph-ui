// References
import React from 'react';

export default class Checkbox extends React.Component {

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
			{ className: 'checkbox', htmlFor: 'checkbox-' + this.props.name + '-' + this.props.value },
			React.createElement('input', {
				type: 'checkbox',
				id: 'checkbox-' + this.props.name + '-' + this.props.value,
				value: this.props.value,
				name: this.props.name + '[]',
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