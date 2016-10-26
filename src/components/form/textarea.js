// References
import React from 'react';

export default class Textarea extends React.Component {
	constructor(props) {
		super(props);
		this.state = { filled: this.props.value? true : (this.props.defaultValue? true : false), rows: 1 };
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		var value = e.target.value;
		var onChange = this.props.onChange;
		var filled = false;
		var rows = this.state.rows;

		if(value.toString() !== '')
		{
			filled = true;
			rows = Math.min(value.toString().split('\n').length, this.props.maxRows || 0);
		}
		else rows = 1;

		this.setState({ filled: filled, rows: rows }, () => {
			if(onChange) onChange(value);
		});
	}

	render() {
		return <div className={'input-group ' + (this.props.rounded? 'rounded ' : '') + (this.props.type || '')}>
			<textarea 
				id={this.props.id} 
				name={this.props.name}
				type={this.props.type || 'text'}
				className={this.state.filled? 'filled' : ''}
				placeholder={this.props.placeholder}
				defaultValue={this.props.defaultValue}
				value={this.props.value}
				rows={this.state.rows}
				onChange={this.onChange} />
			{this.props.label? <label htmlFor={this.props.name}>{this.props.label}</label> : ''}
			{this.props.validate? <span className='error'>{this.props.error}</span> : ''}
		</div>;
	}
}