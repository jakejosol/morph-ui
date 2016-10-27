'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _promise = require('promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // References


var Page = function (_React$Component) {
    _inherits(Page, _React$Component);

    function Page(props) {
        _classCallCheck(this, Page);

        var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

        _this.state = { loading: {}, values: {}, errors: {}, input: {} };
        _this.isLoading = _this.isLoading.bind(_this);
        _this.getValue = _this.getValue.bind(_this);
        _this.getError = _this.getError.bind(_this);
        _this.bindInput = _this.bindInput.bind(_this);
        _this.getInput = _this.getInput.bind(_this);
        return _this;
    }

    _createClass(Page, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            typeof this.propsDidUpdate === 'function' && this.propsDidUpdate(this.props);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            typeof this.propsDidUpdate === 'function' && this.propsDidUpdate(props);
        }
    }, {
        key: 'setLoading',
        value: function setLoading(name, value) {
            var _this2 = this;

            var loading = this.state.loading || {};
            loading[name] = value;
            return new _promise2.default(function (resolve, reject) {
                return _this2.setState({ loading: loading }, resolve);
            });
        }
    }, {
        key: 'setValue',
        value: function setValue(name, value) {
            var _this3 = this;

            var values = this.state.values || {};
            values[name] = value;
            var loading = this.state.loading || {};
            loading[name] = false;
            return new _promise2.default(function (resolve, reject) {
                return _this3.setState({ values: values, loading: loading }, resolve);
            });
        }
    }, {
        key: 'setError',
        value: function setError(name, message) {
            var _this4 = this;

            var errors = this.state.errors || {};
            errors[name] = message;
            var loading = this.state.loading || {};
            loading[name] = false;
            return new _promise2.default(function (resolve) {
                return _this4.setState({ errors: errors, loading: loading }, resolve);
            });
        }
    }, {
        key: 'fetchValue',
        value: function fetchValue(name, action) {
            var _this5 = this;

            return this.setLoading(name, true).then(function () {
                return _this5.getValue(name);
            }).then(action).then(function (value) {
                return _this5.setValue(name, value);
            }).catch(function (err) {
                return _this5.setError(name, err.message).then(function () {
                    throw err;
                });
            });
        }
    }, {
        key: 'isLoading',
        value: function isLoading(name) {
            var loading = this.state.loading || {};
            return loading[name];
        }
    }, {
        key: 'getValue',
        value: function getValue(name, defaultValue) {
            var values = this.state.values || {};
            return values[name] || defaultValue;
        }
    }, {
        key: 'getError',
        value: function getError(name) {
            var errors = this.state.errors || {};
            return errors[name];
        }
    }, {
        key: 'bindInput',
        value: function bindInput(name) {
            var _this6 = this;

            return function (value) {
                var input = _this6.state.input || {};
                input[name] = value;
                _this6.setState({ input: input });
            };
        }
    }, {
        key: 'getInput',
        value: function getInput(name) {
            var input = this.state.input || {};
            return input[name];
        }
    }]);

    return Page;
}(_react2.default.Component);

exports.default = Page;