'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // References


var InputGroup = function (_React$Component) {
	_inherits(InputGroup, _React$Component);

	function InputGroup(props) {
		_classCallCheck(this, InputGroup);

		var _this = _possibleConstructorReturn(this, (InputGroup.__proto__ || Object.getPrototypeOf(InputGroup)).call(this, props));

		_this.state = { filled: _this.props.value ? true : _this.props.defaultValue ? true : false };
		_this.onChange = _this.onChange.bind(_this);
		return _this;
	}

	_createClass(InputGroup, [{
		key: 'onChange',
		value: function onChange(e) {
			var value = e.target.value;
			var onChange = this.props.onChange;

			this.setState({ filled: value.toString() !== '' ? true : false }, function () {
				if (onChange) onChange(value);
			});
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
					type: this.props.type || 'text',
					className: this.state.filled ? 'filled' : '',
					placeholder: this.props.placeholder,
					defaultValue: this.props.defaultValue,
					disabled: this.props.disabled,
					value: this.props.value,
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

	return InputGroup;
}(_react2.default.Component);

exports.default = InputGroup;