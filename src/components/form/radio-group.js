// References
import React from 'react';

// Components
import Radio from './radio';

export default class RadioGroup extends React.Component {
	constructor(props) {
		super(props);
		this.state = { selected: null };
		this.selectItem = this.selectItem.bind(this);
	}

	componentDidMount() {
		this.setState({ selected: this.props.items[0].value });
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