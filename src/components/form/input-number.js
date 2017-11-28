// References
import React from 'react';
import moment from 'moment-timezone';

export default class InputNumber extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			filled: this.props.value? true : (this.props.defaultValue? true : false), 
            value: this.props.defaultValue || '',
			error: null 
		};
        this.onFocus = this.onFocus.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onBlur = this.onBlur.bind(this);
		this.formatNumber = this.formatNumber.bind(this);
	}

    formatNumber(numbr) {
        if(parseInt(numbr) == numbr || this.props.type == 'integer' || this.props.type == 'int') return parseInt(numbr);
        else return parseFloat(numbr);
    }
	
	onFocus() {
		if(this.state.value == 0)
			this.setState({ value: '', filled: true });
	}
    
    onBlur() {
        var changeListener = () => {
            if(typeof this.props.onChange == 'function')
                this.props.onChange(this.state.value);
        };

        if(this.state.value.length == 0)
            this.setState({ value: '', filled: false }, changeListener);
        else
            changeListener();
	}
    
    onChange(e) {
        var value = e.target.value;

        if(isNaN(value))
            this.setState({ value: this.state.value, filled: true });    
        else if(value.length == 0)
            this.setState({ value: '', filled: true });
        else {
			var parsedValue = this.formatNumber(value);
            this.setState({ value: parsedValue, filled: parsedValue.toString().length > 0 });
        }
    }

	render() {
		return <div className={'input-group ' + (this.props.rounded? 'rounded ' : '') + (this.props.type || '')}>
			<input 
				id={this.props.id} 
				name={this.props.name}
				type='text'
				className={this.state.filled? 'filled' : ''}
				placeholder={this.props.placeholder}
				disabled={this.props.disabled}
				value={this.state.value}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                onChange={this.onChange} />
			{this.props.label? <label htmlFor={this.props.name}>{this.props.label}</label> : ''}
			{this.props.validate? <span className='error'>{this.props.error}</span> : ''}
		</div>;
	}
}
