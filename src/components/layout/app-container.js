// References
import React from 'react';

export default class AppContainer extends React.Component {
    render() {
        return <section className='app-container'>
            {this.props.children}
        </section>;
    }
}