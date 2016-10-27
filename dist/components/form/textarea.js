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


var Textarea = function (_React$Component) {
	_inherits(Textarea, _React$Component);

	function Textarea(props) {
		_classCallCheck(this, Textarea);

		var _this = _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, props));

		_this.state = { filled: _this.props.value ? true : _this.props.defaultValue ? true : false, rows: 1 };
		_this.onChange = _this.onChange.bind(_this);
		return _this;
	}

	_createClass(Textarea, [{
		key: 'onChange',
		value: function onChange(e) {
			var value = e.target.value;
			var onChange = this.props.onChange;
			var filled = false;
			var rows = this.state.rows;

			if (value.toString() !== '') {
				filled = true;
				rows = Math.min(value.toString().split('\n').length, this.props.maxRows || 0);
			} else rows = 1;

			this.setState({ filled: filled, rows: rows }, function () {
				if (onChange) onChange(value);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'input-group ' + (this.props.rounded ? 'rounded ' : '') + (this.props.type || '') },
				_react2.default.createElement('textarea', {
					id: this.props.id,
					name: this.props.name,
					type: this.props.type || 'text',
					className: this.state.filled ? 'filled' : '',
					placeholder: this.props.placeholder,
					defaultValue: this.props.defaultValue,
					value: this.props.value,
					rows: this.state.rows,
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

	return Textarea;
}(_react2.default.Component);

exports.default = Textarea;