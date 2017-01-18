// References
import React from 'react';
import moment from 'moment-timezone';

export default class InputDate extends React.Component {
	constructor(props) {
		super(props);
		this.state = { year: this.props.year || '', month: this.props.month || '', day: this.props.day || '', error: null };
		this.onYearChange = this.onYearChange.bind(this);
		this.onMonthChange = this.onMonthChange.bind(this);
		this.onDayChange = this.onDayChange.bind(this);
		this.checkDate = this.checkDate.bind(this);
	}
	
	checkDate() {
		var date = moment(this.state.year + '-' + this.state.month + '-' + this.state.day, 'YYYY-MM-DD', true);
		if(this.state.year !== '' && this.state.month !== '' && this.state.day !== '' && !date.isValid())
			this.setState({ error: 'Invalid date' });
		else if(this.state.year && this.state.month && this.state.day)
			this.setState({ error: null }, () => {
				if(typeof this.props.onChange === 'function')
					this.props.onChange(date.format());
			});
	}

	onYearChange(e) {
		var input = e.target;
		var value = input.value;
		this.setState({ year: value.replace(/\D/g,'').substr(0, 4) }, () => {
			if(value.length >= 4)
				this.refs.month.focus();
			this.checkDate();
		});
	}

	onMonthChange(e) {
		var input = e.target;
		var value = input.value;		
		this.setState({ month: value.replace(/\D/g,'').substr(0, 2) }, () => {
			if(value.length >= 2)
				this.refs.day.focus();
			if(value.length == 0)
				this.refs.year.focus();
			this.checkDate();
		});
	}

	onDayChange(e) {
		var input = e.target;
		var value = input.value;		
		this.setState({ day: value.replace(/\D/g,'').substr(0, 2) }, () => {
			if(value.length == 0)
				this.refs.month.focus();
			this.checkDate();
		});
	}

	render() {
		return <div className={'input-group date ' + (this.props.rounded? 'rounded ' : '')}>
			<input 
				ref='year' 
				id={this.props.id}
				name={this.props.name + '-year'}
				type='text'
				placeholder='YYYY'
				value={this.state.year}
				disabled={this.props.disabled}
				onChange={this.onYearChange} />
			<div className='dividers'>/</div>
			<input 
				ref='month'
				name={this.props.name + '-month'}
				type='text'
				placeholder='MM'
				value={this.state.month}
				disabled={this.props.disabled}
				onChange={this.onMonthChange} />
			<div className='dividers'>/</div>
			<input 
				ref='day'
				name={this.props.name + '-day'}
				type='text'
				placeholder='DD'
				value={this.state.day}
				disabled={this.props.disabled}
				onChange={this.onDayChange} />
			{this.props.label? <label htmlFor={this.props.name + '-year'}>{this.props.label}</label> : ''}
			{this.props.validate? <span className='error'>{this.state.error || this.props.error}</span> : ''}
		</div>;
	}
}
