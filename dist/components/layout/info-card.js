'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // References


// Components


var InfoCard = function (_React$Component) {
	_inherits(InfoCard, _React$Component);

	function InfoCard() {
		_classCallCheck(this, InfoCard);

		return _possibleConstructorReturn(this, (InfoCard.__proto__ || Object.getPrototypeOf(InfoCard)).apply(this, arguments));
	}

	_createClass(InfoCard, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_card2.default,
				{
					padded: true,
					loading: this.props.loading,
					style: { minHeight: this.props.cardHeight ? this.props.cardHeight : 'auto' } },
				_react2.default.createElement(
					'h1',
					null,
					this.props.title
				),
				this.props.subtitle ? _react2.default.createElement(
					'h4',
					null,
					this.props.subtitle
				) : '',
				_react2.default.createElement('hr', null),
				this.props.child ? this.props.child : this.props.children
			);
		}
	}]);

	return InfoCard;
}(_react2.default.Component);

exports.default = InfoCard;