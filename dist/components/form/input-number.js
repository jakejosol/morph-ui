'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // References


var InputNumber = function (_React$Component) {
	_inherits(InputNumber, _React$Component);

	function InputNumber(props) {
		_classCallCheck(this, InputNumber);

		var _this = _possibleConstructorReturn(this, (InputNumber.__proto__ || Object.getPrototypeOf(InputNumber)).call(this, props));

		_this.state = {
			filled: _this.props.value ? true : _this.props.defaultValue ? true : false,
			value: _this.props.defaultValue || '0',
			error: null
		};
		_this.onFocus = _this.onFocus.bind(_this);
		_this.onChange = _this.onChange.bind(_this);
		_this.onBlur = _this.onBlur.bind(_this);
		_this.formatNumber = _this.formatNumber.bind(_this);
		return _this;
	}

	_createClass(InputNumber, [{
		key: 'formatNumber',
		value: function formatNumber(numbr) {
			if (parseInt(numbr) == numbr || this.props.type == 'integer' || this.props.type == 'int') return parseInt(numbr);else return parseFloat(numbr);
		}
	}, {
		key: 'onFocus',
		value: function onFocus() {
			if (this.state.value == 0) this.setState({ value: '', filled: true });
		}
	}, {
		key: 'onBlur',
		value: function onBlur() {
			var _this2 = this;

			var changeListener = function changeListener() {
				if (typeof _this2.props.onChange == 'function') _this2.props.onChange(_this2.state.value);
			};

			if (this.state.value.length == 0) this.setState({ value: 0, filled: false }, changeListener);else changeListener();
		}
	}, {
		key: 'onChange',
		value: function onChange(e) {
			var value = e.target.value;

			if (isNaN(value)) this.setState({ value: this.state.value, filled: true });else if (value.length == 0) this.setState({ value: '', filled: true });else {
				var parsedValue = this.formatNumber(value);
				if (this.props.min) parsedValue = Math.max(parsedValue, this.props.min);
				if (this.props.max) parsedValue = Math.min(parsedValue, this.props.max);
				this.setState({ value: parsedValue, filled: parsedValue.toString().length > 0 });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'input-group ' + (this.props.rounded ? 'rounded ' : '') + (this.props.type || '') },
				_react2.default.createElement('input', {
					id: this.props.id,
					name: this.props.name,
					type: 'text',
					className: this.state.filled ? 'filled' : '',
					placeholder: this.props.placeholder,
					disabled: this.props.disabled,
					value: this.state.value,
					onFocus: this.onFocus,
					onBlur: this.onBlur,
					onChange: this.onChange }),
				this.props.label ? _react2.default.createElement(
					'label',
					{ htmlFor: this.props.name },
					this.props.label
				) : '',
				this.props.validate ? _react2.default.createElement(
					'span',
					{ className: 'error' },
					this.props.error
				) : ''
			);
		}
	}]);

	return InputNumber;
}(_react2.default.Component);

exports.default = InputNumber;