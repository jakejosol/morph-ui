// References
import React from 'react';

// Utils
import Material from '../../utils/material';

export default class Button extends React.Component {
    isRounded() {
        return this.props.rounded? ' rounded' : '';
    }

    getShadow() {
        return Material.getShadowFromElevation(parseInt(this.props.elevation) || 0);
    }

    getType() {
        return this.props.type? ' ' + this.props.type : '';
    }

    render() {

        var styles = {};
        styles.boxShadow = this.getShadow();
        
        if(this.props.float)
        {
            styles.position = 'absolute';
            this.props.float.top && (styles.top = this.props.float.top);
            this.props.float.left && (styles.left = this.props.float.left);
            this.props.float.right && (styles.right = this.props.float.right);
            this.props.float.bottom && (styles.bottom = this.props.float.bottom);
        }

        return <button onClick={this.props.onClick} 
            className={'button' + this.getType() + this.isRounded()}
            style={styles}
            disabled={this.props.disabled}>
            {this.props.children}
        </button>;
    }
}