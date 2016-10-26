// References
import React from 'react';

export default class InputGroup extends React.Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		var value = e.target.files;
		var onChange = this.props.onChange;
		if(onChange)
			onChange(value);
	}

	render() {
		return <div className={'input-group file button ' + (this.props.type || 'default') + (this.props.disabled? ' disabled' : '')}>
			{this.props.children}
			<input 
				id={this.props.id} 
				name={this.props.name}
				type='file'
				disabled={this.props.disabled}
				onChange={this.onChange} />
			{this.props.label? <label htmlFor={this.props.name}>{this.props.label}</label> : ''}
			{this.props.validate? <span className='error'>{this.props.error}</span> : ''}
		</div>;
	}
}