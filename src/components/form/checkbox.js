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

	getLabel() {
		if(this.props.isMarkdown) {
			return <Markdown source={this.props.label} />;
		}
		else return this.props.label;
	}

	render() {
		return <label className='checkbox' htmlFor={'checkbox-' + this.props.name + '-' + this.props.value}>
			<input 
				type='checkbox' 
				id={'checkbox-' + this.props.name + '-' + this.props.value} 
				value={this.props.value}
				name={this.props.name + '[]'} 
				checked={typeof this.props.active == 'undefined' ? this.props.defaultValue : this.props.active}
				onChange={this.onChange} />
			<span>{this.getLabel()}</span>
		</label>;
	}
}