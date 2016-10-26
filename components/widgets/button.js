// References
import React from 'react';

export default class Button extends React.Component {
    render() {
        return <button onClick={this.props.onClick} 
            className={'button' + (this.props.type? ' ' + this.props.type : '')}>
            {this.props.children}
        </button>;
    }
}