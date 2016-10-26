// References
import React from 'react';

export default class TextButton extends React.Component {
    render() {
        return <a href={this.props.link} 
            onClick={this.props.onClick} 
            className={'button' + (this.props.type? ' ' + this.props.type : '')}>
            {this.props.children}
        </a>;
    }
}