// References
import React from 'react';

export default class InputGroup extends React.Component {
	constructor(props) {
		super(props);
		this.state = { filled: this.props.value ? true : this.props.defaultValue ? true : false };
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		var value = e.target.value;
		var onChange = this.props.onChange;

		this.setState({ filled: value.toString() !== '' ? true : false }, () => {
			if (onChange) onChange(value);
		});
	}

	render() {
		return React.createElement(
			'div',
			{ className: 'input-group ' + (this.props.rounded ? 'rounded ' : '') + (this.props.type || '') },
			React.createElement('input', {
				id: this.props.id,
				name: this.props.name,
				type: this.props.type || 'text',
				className: this.state.filled ? 'filled' : '',
				placeholder: this.props.placeholder,
				defaultValue: this.props.defaultValue,
				disabled: this.props.disabled,
				value: this.props.value,
				onChange: this.onChange }),
			this.props.label ? React.createElement(
				'label',
				{ htmlFor: this.props.name },
				this.props.label
			) : '',
			this.props.validate ? React.createElement(
				'span',
				{ className: 'error' },
				this.props.error
			) : ''
		);
	}
}