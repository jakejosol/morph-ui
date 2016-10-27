'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sideMenu = require('./side-menu');

var _sideMenu2 = _interopRequireDefault(_sideMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // References


// Components


var Side = function (_React$Component) {
    _inherits(Side, _React$Component);

    function Side() {
        _classCallCheck(this, Side);

        return _possibleConstructorReturn(this, (Side.__proto__ || Object.getPrototypeOf(Side)).apply(this, arguments));
    }

    _createClass(Side, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'aside',
                { className: 'side' },
                _react2.default.createElement(_sideMenu2.default, { routes: this.props.routes, current: this.props.current }),
                this.props.children
            );
        }
    }]);

    return Side;
}(_react2.default.Component);

exports.default = Side;