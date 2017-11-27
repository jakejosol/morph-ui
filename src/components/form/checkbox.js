// References
import React from 'react';
import Markdown from 'react-markdown';

export default class Checkbox extends React.Component {

	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
	}
	
	onChange() {
		if(this.props.onChange) this.props.onChange(this.props.value);
	}

	render() {
		return <label className='checkbox' htmlFor={'checkbox-' + this.props.name + '-' + this.props.value}>
			<input 
				type='checkbox' 
				id={'checkbox-' + this.props.name + '-' + this.props.value} 
				value={this.props.value}
				name={this.props.name + '[]'} 
				checked={this.props.active || this.props.defaultValue}
				onChange={this.onChange} />
			<span><Markdown source={this.props.label} /></span>
		</label>;
	}
}