// References
import React from 'react';
import Promise from 'promise';

export default class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = { loading: {}, values: {}, errors: {}, input: {} };
        this.isLoading = this.isLoading.bind(this);
        this.getValue = this.getValue.bind(this);
        this.getError = this.getError.bind(this);
        this.bindInput = this.bindInput.bind(this);
        this.getInput = this.getInput.bind(this);
    }

    componentDidMount() {
        typeof this.propsDidUpdate === 'function' && this.propsDidUpdate(this.props);
    }

    componentWillReceiveProps(props) {
        typeof this.propsDidUpdate === 'function' && this.propsDidUpdate(props);
    }

    setLoading(name, value) {
        var loading = this.state.loading || {};
        loading[name] = value;
        return new Promise((resolve, reject) => this.setState({ loading: loading }, resolve));
    }

    setValue(name, value) {
        var values = this.state.values || {};
        values[name] = value;
        var loading = this.state.loading || {};
        loading[name] = false;
        return new Promise((resolve, reject) => this.setState({ values: values, loading: loading }, resolve));
    }

    setError(name, message) {
        var errors = this.state.errors || {};
        errors[name] = message;
        var loading = this.state.loading || {};
        loading[name] = false;
        return new Promise(resolve => this.setState({ errors: errors, loading: loading }, resolve));
    }

    fetchValue(name, action) {
        return this.setLoading(name, true).then(() => this.getValue(name)).then(action).then(value => this.setValue(name, value)).catch(err => this.setError(name, err.message).then(() => {
            throw err;
        }));
    }

    isLoading(name) {
        var loading = this.state.loading || {};
        return loading[name];
    }

    getValue(name, defaultValue) {
        var values = this.state.values || {};
        return values[name] || defaultValue;
    }

    getError(name) {
        var errors = this.state.errors || {};
        return errors[name];
    }

    bindInput(name) {
        return value => {
            var input = this.state.input || {};
            input[name] = value;
            this.setState({ input: input });
        };
    }

    getInput(name) {
        var input = this.state.input || {};
        return input[name];
    }
}