// References
import React from 'react';

// Components
import Radio from './radio';

export default class RadioGroup extends React.Component {
	constructor(props) {
		super(props);
		this.state = { selected: this.props.items[0].value };
		this.selectItem = this.selectItem.bind(this);
	}

	selectItem(value) {
		this.setState({ selected: value }, function () {
			if (this.props.onSelect) this.props.onSelect(this.state.selected);
		}.bind(this));
	}

	getItems() {
		return this.props.items.map(function (item) {
			return React.createElement(Radio, {
				key: item.value,
				name: this.props.name,
				value: item.value,
				label: item.label,
				active: this.state.selected == item.value,
				onChange: this.selectItem });
		}.bind(this));
	}

	render() {
		return React.createElement(
			'div',
			{ className: 'radio-group' },
			this.getItems()
		);
	}
}