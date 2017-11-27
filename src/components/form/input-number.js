// References
import React from 'react';
import moment from 'moment-timezone';

export default class InputNumber extends React.Component {
	constructor(props) {
		super(props);
		this.state = { filled: this.props.value? true : (this.props.defaultValue? true : false), error: null };
		this.onChange = this.onChange.bind(this);
		this.onBlur = this.onBlur.bind(this);
		this.formatNumber = this.formatNumber.bind(this);
	}

    formatNumber(numbr) {
        if(!numbr) return '';
        if(isNaN(numbr)) return '0';
        if(parseInt(numbr) == numbr || this.props.type == 'integer' || this.props.type == 'int') return parseInt(numbr);
        else return parseFloat(numbr);
    }
    
    onChange(e) {
		var value = e.target.value;
		var onChange = this.props.onChange;

		this.setState({ filled: value && value.toString() !== ''? true : false, value: value });
    }
    
    onBlur(e) {
		var value = e.target.value;
		var onChange = this.props.onChange;

		this.setState({ filled: value && value.toString() !== ''? true : false, value: this.formatNumber(value) }, () => {
			if(onChange) onChange(this.state.value);
		});
	}

	render() {
		return <div className={'input-group ' + (this.props.rounded? 'rounded ' : '') + (this.props.type || '')}>
			<input 
				id={this.props.id} 
				name={this.props.name}
				type='text'
				className={this.state.filled? 'filled' : ''}
				placeholder={this.props.placeholder}
                defaultValue={this.props.defaultValue}
				disabled={this.props.disabled}
				value={this.state.value}
                onChange={this.onChange}
				onBlur={this.onBlur} />
			{this.props.label? <label htmlFor={this.props.name}>{this.props.label}</label> : ''}
			{this.props.validate? <span className='error'>{this.props.error}</span> : ''}
		</div>;
	}
}
