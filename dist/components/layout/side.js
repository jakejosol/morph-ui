// References
import React from 'react';

// Components
import SideMenu from './side-menu';

export default class Side extends React.Component {
    render() {
        return React.createElement(
            'aside',
            { className: 'side' },
            React.createElement(SideMenu, { routes: this.props.routes, current: this.props.current }),
            this.props.children
        );
    }
}