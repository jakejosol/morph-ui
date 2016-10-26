// References
import React from 'react';

export default class ButtonGroup extends React.Component {
    render() {
        return <div className='button-group'>{this.props.children}</div>;
    }
}