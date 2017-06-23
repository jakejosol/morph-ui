// References
import React from 'react';
import _ from 'underscore';
import { Button, Icon } from 'morph-ui';

const DEFAULT_PADDING = 15;
const DEFAULT_SPACING = 15;
const DEFAULT_SIZE = 60;

export default class ButtonMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this.toggle = this.toggle.bind(this);
        this.runAction = this.runAction.bind(this);
    }

    toggle() {
        this.setState({ active: !this.state.active });
    }

    runAction(action, event) {
        this.setState({ active: false }, () => {
           typeof action == 'function' && action(event);
        });
    }

    getItems() {
        var buttonSize = this.props.size || DEFAULT_SIZE;
        var itemStyles = {};
        if(this.props.top) itemStyles.marginTop = DEFAULT_SPACING + 'px';
        else itemStyles.marginBottom = DEFAULT_SPACING + 'px';

        return this.props.items.map(item => {
            return <div className='button-item' key={item.text} style={itemStyles}>
                {this.props.right || !this.props.left? <div className='button-text'>{item.text}</div> : ''}
                <Button 
                    width={buttonSize + 'px'}
                    height={buttonSize  + 'px'}
                    type='default'
                    elevation='5'
                    onClick={event => this.runAction(item.action, event)}>
                    <Icon name={item.icon} solo={true} />
                </Button>
                {!this.props.right && this.props.left? <div className='button-text'>{item.text}</div> : ''}
            </div>;
        });
    }

    getButtonSize() {
        return parseInt(this.props.size) || DEFAULT_SIZE;
    }

    getStyles() {
        var buttonSize = this.getButtonSize();
        
        var toggleStyles = {};
        var itemsStyles = {};
        var menuStyles = {};

        // Check vertical position
        if(this.props.top)
        {
            toggleStyles.top = this.props.top + 'px';
            itemsStyles.top = this.props.top + 'px';
            menuStyles.top = 0;
            
            if(this.state.active)
            {
                itemsStyles.top = buttonSize + parseInt(this.props.top) + 'px';
                menuStyles.bottom = 0;
            }
        }
        else
        {
            toggleStyles.bottom = (this.props.bottom || DEFAULT_PADDING)  + 'px';
            itemsStyles.bottom = (this.props.bottom || DEFAULT_PADDING) + 'px';
            menuStyles.bottom = 0;

            if(this.state.active)
            {
                itemsStyles.bottom = buttonSize + parseInt(this.props.bottom || DEFAULT_PADDING) + 'px';
                menuStyles.top = 0;
            }
        }

        // Check horizontal position
        if(this.props.left)
        {
            toggleStyles.left = this.props.left  + 'px';
            itemsStyles.left = this.props.left + 'px';
            menuStyles.left = 0;
            menuStyles.textAlign = 'left';

            if(this.state.active)
                menuStyles.right = 0;
        }
        else
        {
            toggleStyles.right = (this.props.right || DEFAULT_PADDING)  + 'px';
            itemsStyles.right = (this.props.right || DEFAULT_PADDING) + 'px';
            menuStyles.right = 0;
            menuStyles.textAlign = 'right';

            if(this.state.active)
                menuStyles.left = 0;
        }

        return {
            toggle: toggleStyles,
            items: itemsStyles,
            menu: menuStyles
        };
    }

    render() {
        var buttonSize = this.getButtonSize();
        var styles = this.getStyles();

        return <div className={'button-menu' + (this.state.active? ' active' : '')} style={styles.menu}>
            <div className='items' style={styles.items}>
                {this.getItems()}
            </div>
            <Button
                width={buttonSize + 'px'}
                height={buttonSize + 'px'}
                type='primary toggle' 
                elevation='5'
                onClick={this.toggle}
                float={styles.toggle}>
                <Icon name={'chevron-' + (this.props.top? 'down' : 'up')} solo={true} />
            </Button>
        </div>;
    }
}