// References
import React from 'react';

// Components
import Icon from '../widgets/icon';

export default class SelectGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            selected: this.props.multiple? [] : { label: '', value: '' },
            filled: this.props.value? true : (this.props.defaultValue? true : false) 
        };
        this.toggle = this.toggle.bind(this);
        this.close = this.close.bind(this);
        this.selectItem = this.selectItem.bind(this);
    }

	selectItem(item) {
        return (event) => {
            event.preventDefault();
            console.log('selected', item);
            var selected = this.state.selected;
            var filled = true;
            var active = false;

            if(this.props.multiple) 
            {
                var matchIndex = selected.findIndex(selectedItem => selectedItem.value == item.value);
                if(matchIndex >= 0)
                    selected.splice(matchIndex, 1);
                else
                    selected.push(item);

                if(selected.length == 0) filled = false;
                active = true;
            }
            else selected = item;

            this.setState({ selected: selected, filled: filled, active: active }, function() {
                if(this.props.onSelect) this.props.onSelect(this.state.selected)
            }.bind(this));
        };
	}

    isActive() {
        return this.state.active? ' active' : '';
    }

    isFilled() {
        return this.state.filled? ' filled' : '';
    }

    isMultiple() {
        return this.props.multiple? ' multiple' : '';
    }

    getValue() {
        if(this.props.multiple)
            return this.state.selected.map(item => item.label).join(', ');
        else
            return this.state.selected.label;
    }

    getInputType() {
        return this.props.multiple? 'checkbox' : 'radio';
    }

    getInputName() {
        return 'select-' + this.props.name + (this.props.multiple? '[]' : ''); 
    }

    isChecked(item) {
        if(this.props.multiple)
            return this.state.selected.findIndex(selectedItem => selectedItem.value == item.value) >= 0;
        else
            return this.state.selected.value == item.value;
    }

    getItems() {
        return this.props.items.map(item => {
            return <label key={item.value} htmlFor={this.props.name + '-' + item.value} 
                className='list-item' 
                onClick={this.selectItem(item)}>
                <input id={this.props.name + '-' + item.value} 
                    type={this.getInputType()} 
                    name={this.getInputName()}
                    value={item.value}
				    checked={this.isChecked(item)} />
                <div className='item-text'>{item.label}</div>
            </label>;
        });
    }

    toggle(event) {
        event.preventDefault();
        this.setState({ active: !this.state.active });
    }

    close(event) {
        event.preventDefault();
        this.setState({ active: false });
    }

    render() {
        return <div className={'select-group' + this.isActive() + this.isFilled() + this.isMultiple() }
        onBlur={this.close} 
        tabIndex='0'>
            <div className='select-input' onClick={this.toggle}>
                {this.props.label? <div className='select-label'>{this.props.label}</div> : ''}
                <div className='selected-value'>
                    {this.getValue()}
                </div>
                <div className='select-icon'>
                    <Icon name={this.props.icon || 'caret-down'} />
                </div>
            </div>
            <div className='select-list'>
                {this.getItems()}
            </div>
        </div>;
    }
}