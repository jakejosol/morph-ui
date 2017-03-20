// References
import React from 'react';
import _ from 'underscore';

// Components
import Radio from './radio';

export default class RadioGroup extends React.Component {
	constructor(props) {
		super(props);
		this.state = { selected: null, items: this.props.items };
		this.selectItem = this.selectItem.bind(this);
	}

	componentWillReceiveProps(props) {
		if(!_.isEqual(props.items, this.state.items))
			this.setState({ selected: null, items: this.props.items });
	}

	selectItem(value) {
		this.setState({ selected: value }, function() {
			if(this.props.onSelect) this.props.onSelect(this.state.selected)
		}.bind(this));
	}

	getItems() {
		return this.props.items.map(function(item) {
			return <Radio
					key={item.value}
					name={this.props.name}
					value={item.value}
					label={item.label}
					active={this.state.selected == item.value}
					onChange={this.selectItem} />;
		}.bind(this));
	}

	render() {
		return <div className='radio-group'>
			{this.getItems()}
		</div>;
	}
}