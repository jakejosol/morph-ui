// References
import React from 'react';

export default class NavLink extends React.Component {
    render() {
        return <li>
            <a href={this.props.url} onClick={e => {
                if(typeof this.props.action === 'function')
                {
                    e.preventDefault();
                    this.props.action();
                }
            }}>
                <span>{this.props.text}</span>
            </a>
        </li>;
    }
}