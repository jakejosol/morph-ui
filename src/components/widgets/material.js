// References
import React from 'react';
// TODO
export default class Material extends React.Component {
    render() {
        return <div className={'material' + (this.props.className? ' ' + this.className : '')}>
            {this.props.children}
        </div>;
    }
}