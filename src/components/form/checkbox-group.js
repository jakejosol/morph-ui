// References
import React from 'react';

// Components
import Checkbox from './checkbox';

export default class CheckboxGroup extends React.Component {
	constructor(props) {
		super(props);
		this.state = { selectAll: false, selected: [] };
		this.toggleSelectAll = this.toggleSelectAll.bind(this);
		this.toggleSelect = this.toggleSelect.bind(this);
	}

	toggleSelectAll() {
		if(this.state.selectAll)
		{
			this.setState({
				selected: [],
				selectAll: false
			}, function()
			{
				// Return items selected
				if(this.props.onSelect) this.props.onSelect(this.state.selected);
			}.bind(this));
		}
		else
		{
			var selected = this.props.items.map(function(item) {
				return item.value;
			});

			this.setState({
				selected: selected,
				selectAll: true
			}, function()
			{
				// Return items selected
				if(this.props.onSelect) this.props.onSelect(this.state.selected);
			}.bind(this));
		}
	}

	toggleSelect(value) {
		if(this.state.selected.indexOf(value) >= 0)
		{
			// Remove the value
			var selected = this.state.selected;
			selected.splice(selected.indexOf(value), 1);

			this.setState({
				selected: selected,
				selectAll: false
			}, function()
			{
				// Return items selected
				if(this.props.onSelect) this.props.onSelect(this.state.selected);
			}.bind(this));
		}
		else
		{
			// Add the value
			var selected = this.state.selected;
			selected.push(value);

			this.setState({
				selected: selected
			}, function()
			{
				// Return items selected
				if(this.props.onSelect) this.props.onSelect(this.state.selected);
			}.bind(this));
		}
	}

	getItems() {		
		return this.props.items.map(function(item){
			return <Checkbox 
					key={item.value}
					name={this.props.name} 
					value={item.value} 
					label={item.label} 
					active={this.state.selected.indexOf(item.value) >= 0}
					onChange={this.toggleSelect} />;
		}.bind(this));
	}

	render() {
		return <div className='checkbox-group'>				
			<Checkbox name={this.props.name} value='0' label='All' active={this.state.selectAll} onChange={this.toggleSelectAll} />
			{this.getItems()}
		</div>;
	}
}