'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('../widgets/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // References


// Components


var CardLoader = function (_React$Component) {
	_inherits(CardLoader, _React$Component);

	function CardLoader() {
		_classCallCheck(this, CardLoader);

		return _possibleConstructorReturn(this, (CardLoader.__proto__ || Object.getPrototypeOf(CardLoader)).apply(this, arguments));
	}

	_createClass(CardLoader, [{
		key: 'isActive',
		value: function isActive() {
			return this.props.active ? ' active' : '';
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'card-loader' + this.isActive() },
				_react2.default.createElement(
					'div',
					{ className: 'loader-block' },
					_react2.default.createElement(
						'div',
						{ className: 'loader-icon' },
						_react2.default.createElement(_icon2.default, { className: 'loader', name: this.props.icon })
					)
				)
			);
		}
	}]);

	return CardLoader;
}(_react2.default.Component);

exports.default = CardLoader;