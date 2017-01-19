'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _chart = require('./chart');

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // References


// Components


var ColumnGraph = function (_React$Component) {
	_inherits(ColumnGraph, _React$Component);

	function ColumnGraph(props) {
		_classCallCheck(this, ColumnGraph);

		var _this = _possibleConstructorReturn(this, (ColumnGraph.__proto__ || Object.getPrototypeOf(ColumnGraph)).call(this, props));

		_this.state = { series: [], labels: [] };
		_this.update = _this.update.bind(_this);
		_this.getSeries = _this.getSeries.bind(_this);
		return _this;
	}

	_createClass(ColumnGraph, [{
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
			var datavalues = props.values;

			// Prepare parameters
			var zValues = {};
			var series = [];
			var labels = [];

			for (var index in datavalues) {
				var row = datavalues[index];
				var label = row.label;
				if (!_underscore2.default.find(labels, label)) labels.push(label);

				for (var key in row.values) {
					if (!zValues[key]) zValues[key] = {};
					zValues[key][label] = row.values[key];
				}
			}

			for (var seriesName in zValues) {
				series.push({
					name: seriesName,
					values: _underscore2.default.map(zValues[seriesName], function (value) {
						return value;
					}),
					type: 'column'
				});
			}

			this.setState({ series: series, labels: labels });
		}
	}, {
		key: 'getSeries',
		value: function getSeries() {
			var index = 0;
			return this.state.series.map(function (series) {
				var seriesItem = { name: series.name, data: series.values, type: series.type };
				if (this.props.opposite) seriesItem.yAxis = index++;
				return seriesItem;
			}.bind(this));
		}
	}, {
		key: 'render',
		value: function render() {
			// Prepare config
			var config = {
				chart: { height: this.props.height || 250 },
				title: { text: '' },
				tooltip: { shared: true },
				xAxis: {
					title: { text: this.props.xAxis },
					categories: this.state.labels
				},
				yAxis: {
					showAxis: false
				},
				series: this.getSeries()
			};

			return _react2.default.createElement(
				'div',
				{ className: 'column-graph' },
				_react2.default.createElement(_chart2.default, { config: config, exportingEnabled: this.props.exportingEnabled })
			);
		}
	}]);

	return ColumnGraph;
}(_react2.default.Component);

exports.default = ColumnGraph;