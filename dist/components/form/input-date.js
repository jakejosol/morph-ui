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


var InputDate = function (_React$Component) {
	_inherits(InputDate, _React$Component);

	function InputDate(props) {
		_classCallCheck(this, InputDate);

		var _this = _possibleConstructorReturn(this, (InputDate.__proto__ || Object.getPrototypeOf(InputDate)).call(this, props));

		_this.state = { year: _this.props.year || '', month: _this.props.month || '', day: _this.props.day || '', error: null };
		_this.onYearChange = _this.onYearChange.bind(_this);
		_this.onMonthChange = _this.onMonthChange.bind(_this);
		_this.onDayChange = _this.onDayChange.bind(_this);
		_this.checkDate = _this.checkDate.bind(_this);
		return _this;
	}

	_createClass(InputDate, [{
		key: 'checkDate',
		value: function checkDate() {
			var _this2 = this;

			var date = (0, _momentTimezone2.default)(this.state.year + '-' + this.state.month + '-' + this.state.day, 'YYYY-MM-DD', true);
			if (this.state.year !== '' && this.state.month !== '' && this.state.day !== '' && !date.isValid()) this.setState({ error: 'Invalid date' });else if (this.state.year && this.state.month && this.state.day) this.setState({ error: null }, function () {
				if (typeof _this2.props.onChange === 'function') _this2.props.onChange(date.format());
			});
		}
	}, {
		key: 'onYearChange',
		value: function onYearChange(e) {
			var _this3 = this;

			var input = e.target;
			var value = input.value;
			this.setState({ year: value.replace(/\D/g, '').substr(0, 4) }, function () {
				if (value.length >= 4) _this3.refs.month.focus();
				_this3.checkDate();
			});
		}
	}, {
		key: 'onMonthChange',
		value: function onMonthChange(e) {
			var _this4 = this;

			var input = e.target;
			var value = input.value;
			this.setState({ month: value.replace(/\D/g, '').substr(0, 2) }, function () {
				if (value.length >= 2) _this4.refs.day.focus();
				if (value.length == 0) _this4.refs.year.focus();
				_this4.checkDate();
			});
		}
	}, {
		key: 'onDayChange',
		value: function onDayChange(e) {
			var _this5 = this;

			var input = e.target;
			var value = input.value;
			this.setState({ day: value.replace(/\D/g, '').substr(0, 2) }, function () {
				if (value.length == 0) _this5.refs.month.focus();
				_this5.checkDate();
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'input-group date ' + (this.props.rounded ? 'rounded ' : '') },
				_react2.default.createElement('input', {
					ref: 'year',
					id: this.props.id,
					name: this.props.name + '-year',
					type: 'text',
					placeholder: 'YYYY',
					value: this.state.year,
					disabled: this.props.disabled,
					onChange: this.onYearChange }),
				_react2.default.createElement(
					'div',
					{ className: 'dividers' },
					'/'
				),
				_react2.default.createElement('input', {
					ref: 'month',
					name: this.props.name + '-month',
					type: 'text',
					placeholder: 'MM',
					value: this.state.month,
					disabled: this.props.disabled,
					onChange: this.onMonthChange }),
				_react2.default.createElement(
					'div',
					{ className: 'dividers' },
					'/'
				),
				_react2.default.createElement('input', {
					ref: 'day',
					name: this.props.name + '-day',
					type: 'text',
					placeholder: 'DD',
					value: this.state.day,
					disabled: this.props.disabled,
					onChange: this.onDayChange }),
				this.props.label ? _react2.default.createElement(
					'label',
					{ htmlFor: this.props.name + '-year' },
					this.props.label
				) : '',
				this.props.validate ? _react2.default.createElement(
					'span',
					{ className: 'error' },
					this.state.error || this.props.error
				) : ''
			);
		}
	}]);

	return InputDate;
}(_react2.default.Component);

exports.default = InputDate;