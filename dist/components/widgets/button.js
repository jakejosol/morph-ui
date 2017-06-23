'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _material = require('../../utils/material');

var _material2 = _interopRequireDefault(_material);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // References


// Utils


var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'isRounded',
        value: function isRounded() {
            return this.props.rounded ? ' rounded' : '';
        }
    }, {
        key: 'getShadow',
        value: function getShadow() {
            return _material2.default.getShadowFromElevation(parseInt(this.props.elevation) || 0);
        }
    }, {
        key: 'getType',
        value: function getType() {
            return this.props.type ? ' ' + this.props.type : '';
        }
    }, {
        key: 'render',
        value: function render() {

            var styles = {};
            styles.boxShadow = this.getShadow();

            if (this.props.float) {
                styles.position = 'absolute';
                this.props.float.top && (styles.top = this.props.float.top);
                this.props.float.left && (styles.left = this.props.float.left);
                this.props.float.right && (styles.right = this.props.float.right);
                this.props.float.bottom && (styles.bottom = this.props.float.bottom);
            }

            this.props.width && (styles.width = this.props.width);
            this.props.height && (styles.height = this.props.height);

            return _react2.default.createElement(
                'button',
                { onClick: this.props.onClick,
                    className: 'button' + this.getType() + this.isRounded(),
                    style: styles,
                    disabled: this.props.disabled },
                this.props.children
            );
        }
    }]);

    return Button;
}(_react2.default.Component);

exports.default = Button;