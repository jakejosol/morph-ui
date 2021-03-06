'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // References


var Radio = function (_React$Component) {
	_inherits(Radio, _React$Component);

	function Radio(props) {
		_classCallCheck(this, Radio);

		var _this = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this, props));

		_this.onChange = _this.onChange.bind(_this);
		return _this;
	}

	_createClass(Radio, [{
		key: 'onChange',
		value: function onChange() {
			if (this.props.onChange) this.props.onChange(this.props.value);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'label',
				{ className: 'radio', htmlFor: 'radio-' + this.props.name + '-' + this.props.value },
				_react2.default.createElement('input', {
					type: 'radio',
					name: this.props.name + '[]',
					id: 'radio-' + this.props.name + '-' + this.props.value,
					value: this.props.value,
					checked: this.props.active,
					onChange: this.onChange }),
				_react2.default.createElement(
					'span',
					null,
					_react2.default.createElement(_reactMarkdown2.default, { source: this.props.label })
				)
			);
		}
	}]);

	return Radio;
}(_react2.default.Component);

exports.default = Radio;