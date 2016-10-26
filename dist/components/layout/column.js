// References
import React from 'react';

export default class Column extends React.Component {
    constructor(props) {
        super(props);
    }

    getSize() {
        return this.props.size ? ' ' + this.props.size : '';
    }

    getDivisions() {
        if (this.props.division < 2 || this.props.division > 4) throw 'Columns can only be divided by 2\'s, 3\'s or 4\'s';
        return this.props.divisions ? ' divided by-' + this.props.divisions : '';
    }

    render() {
        return React.createElement(
            'div',
            { className: 'col' + this.getSize() + this.getDivisions() },
            this.props.children
        );
    }
}