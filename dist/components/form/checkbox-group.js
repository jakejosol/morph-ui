'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // References


// Components


var CheckboxGroup = function (_React$Component) {
	_inherits(CheckboxGroup, _React$Component);

	function CheckboxGroup(props) {
		_classCallCheck(this, CheckboxGroup);

		var _this = _possibleConstructorReturn(this, (CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).call(this, props));

		_this.state = { selectAll: false, selected: [] };
		_this.toggleSelectAll = _this.toggleSelectAll.bind(_this);
		_this.toggleSelect = _this.toggleSelect.bind(_this);
		return _this;
	}

	_createClass(CheckboxGroup, [{
		key: 'toggleSelectAll',
		value: function toggleSelectAll() {
			if (this.state.selectAll) {
				this.setState({
					selected: [],
					selectAll: false
				}, function () {
					// Return items selected
					if (this.props.onSelect) this.props.onSelect(this.state.selected);
				}.bind(this));
			} else {
				var selected = this.props.items.map(function (item) {
					return item.value;
				});

				this.setState({
					selected: selected,
					selectAll: true
				}, function () {
					// Return items selected
					if (this.props.onSelect) this.props.onSelect(this.state.selected);
				}.bind(this));
			}
		}
	}, {
		key: 'toggleSelect',
		value: function toggleSelect(value) {
			if (this.state.selected.indexOf(value) >= 0) {
				// Remove the value
				var selected = this.state.selected;
				selected.splice(selected.indexOf(value), 1);

				this.setState({
					selected: selected,
					selectAll: false
				}, function () {
					// Return items selected
					if (this.props.onSelect) this.props.onSelect(this.state.selected);
				}.bind(this));
			} else {
				// Add the value
				var selected = this.state.selected;
				selected.push(value);

				this.setState({
					selected: selected
				}, function () {
					// Return items selected
					if (this.props.onSelect) this.props.onSelect(this.state.selected);
				}.bind(this));
			}
		}
	}, {
		key: 'getItems',
		value: function getItems() {
			return this.props.items.map(function (item) {
				return _react2.default.createElement(_checkbox2.default, {
					key: item.value,
					name: this.props.name,
					value: item.value,
					label: item.label,
					active: this.state.selected.indexOf(item.value) >= 0,
					onChange: this.toggleSelect });
			}.bind(this));
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'checkbox-group' },
				_react2.default.createElement(_checkbox2.default, { name: this.props.name, value: '0', label: 'All', active: this.state.selectAll, onChange: this.toggleSelectAll }),
				this.getItems()
			);
		}
	}]);

	return CheckboxGroup;
}(_react2.default.Component);

exports.default = CheckboxGroup;