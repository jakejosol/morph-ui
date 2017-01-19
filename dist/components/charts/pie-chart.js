'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chart = require('./chart');

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // References


// Components


var PieChart = function (_React$Component) {
	_inherits(PieChart, _React$Component);

	function PieChart(props) {
		_classCallCheck(this, PieChart);

		var _this = _possibleConstructorReturn(this, (PieChart.__proto__ || Object.getPrototypeOf(PieChart)).call(this, props));

		_this.state = { series: [] };
		_this.update = _this.update.bind(_this);
		_this.getSeries = _this.getSeries.bind(_this);
		return _this;
	}

	_createClass(PieChart, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.update(this.props);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(props) {
			this.update(props);
		}
	}, {
		key: 'update',
		value: function update(props) {
			if (!props.values) return;

			// Prepare parameters
			var series = [];

			// Loop through the result
			for (var i in props.values) {
				var item = props.values[i];
				var label = item[props.label];
				var value = item[props.value];

				series.push({ name: label, y: value });
			}

			// Set the state
			this.setState({ series: series });
		}
	}, {
		key: 'getSeries',
		value: function getSeries() {
			return [{
				name: this.props.name,
				colorByPoint: true,
				data: this.state.series
			}];
		}
	}, {
		key: 'render',
		value: function render() {
			// Prepare config
			var config = {
				chart: { type: 'pie', height: this.props.height || 250 },
				title: { text: '' },
				tooltip: {
					pointFormat: this.props.details || '{series.name}: <b>{point.y}</b><br>Share: <b>{point.percentage:.2f}%</b>'
				},
				plotOptions: {
					pie: {
						allowPointSelect: true,
						cursor: 'pointer',
						dataLabels: {
							enabled: false
						},
						showInLegend: true
					}
				},
				series: this.getSeries()
			};

			return _react2.default.createElement(
				'div',
				{ className: 'pie-chart' },
				_react2.default.createElement(_chart2.default, { config: config, exportingEnabled: this.props.exportingEnabled })
			);
		}
	}]);

	return PieChart;
}(_react2.default.Component);

exports.default = PieChart;