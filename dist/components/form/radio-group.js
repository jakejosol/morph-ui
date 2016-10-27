'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radio = require('./radio');

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // References


// Components


var RadioGroup = function (_React$Component) {
	_inherits(RadioGroup, _React$Component);

	function RadioGroup(props) {
		_classCallCheck(this, RadioGroup);

		var _this = _possibleConstructorReturn(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).call(this, props));

		_this.state = { selected: _this.props.items[0].value };
		_this.selectItem = _this.selectItem.bind(_this);
		return _this;
	}

	_createClass(RadioGroup, [{
		key: 'selectItem',
		value: function selectItem(value) {
			this.setState({ selected: value }, function () {
				if (this.props.onSelect) this.props.onSelect(this.state.selected);
			}.bind(this));
		}
	}, {
		key: 'getItems',
		value: function getItems() {
			return this.props.items.map(function (item) {
				return _react2.default.createElement(_radio2.default, {
					key: item.value,
					name: this.props.name,
					value: item.value,
					label: item.label,
					active: this.state.selected == item.value,
					onChange: this.selectItem });
			}.bind(this));
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'radio-group' },
				this.getItems()
			);
		}
	}]);

	return RadioGroup;
}(_react2.default.Component);

exports.default = RadioGroup;