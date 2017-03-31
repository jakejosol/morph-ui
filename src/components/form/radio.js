// References
import React from 'react';
import Markdown from 'react-markdown';

export default class Radio extends React.Component {

	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
	}

	onChange() {
		if(this.props.onChange) this.props.onChange(this.props.value);
	}

	render() {
		return <label className='radio' htmlFor={'radio-' + this.props.name + '-' + this.props.value}>
			<input 
				type='radio' 
				name={this.props.name + '[]'}
				id={'radio-' + this.props.name + '-' + this.props.value}
				value={this.props.value}
				checked={this.props.active} 
				onChange={this.onChange} />
			<span><Markdown source={this.props.label} /></span>
		</label>;
	}
}