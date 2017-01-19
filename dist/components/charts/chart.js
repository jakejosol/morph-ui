'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _highcharts = require('highcharts');

var _highcharts2 = _interopRequireDefault(_highcharts);

var _exporting = require('highcharts/modules/exporting');

var _exporting2 = _interopRequireDefault(_exporting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // References


// Modules


var Chart = function (_React$Component) {
    _inherits(Chart, _React$Component);

    function Chart(props) {
        _classCallCheck(this, Chart);

        var _this = _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).call(this, props));

        _this.disableCredits = _this.disableCredits.bind(_this);
        _this.enableExporting = _this.enableExporting.bind(_this);
        return _this;
    }

    _createClass(Chart, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.renderChart(this.props.type, this.props.config);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            this.renderChart(props.type, props.config);
        }
    }, {
        key: 'disableCredits',
        value: function disableCredits(config) {
            // Remove credits
            config.credits = {
                enabled: false
            };
        }
    }, {
        key: 'enableExporting',
        value: function enableExporting(config) {
            if (this.props.exportingEnabled) {
                // Activate exporting
                (0, _exporting2.default)(_highcharts2.default);

                // Add exporting
                config.exporting = {
                    chartOptions: { // specific options for the exported image
                        plotOptions: {
                            series: {
                                dataLabels: {
                                    enabled: true
                                }
                            }
                        }
                    },
                    scale: 3,
                    fallbackToExportServer: false
                };
            }
        }
    }, {
        key: 'renderChart',
        value: function renderChart(type, config) {
            // Check if config exists
            if (!config) {
                throw new Error('Config must be specified for the ' + displayName + ' component');
            }

            // Adjust configuration
            this.disableCredits(config);
            this.enableExporting(config);

            // Set container which the chart should render to.
            this.chart = new _highcharts2.default[type || "chart"](this.refs.chart, config);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.chart.destroy();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'chart', ref: 'chart' });
        }
    }]);

    return Chart;
}(_react2.default.Component);

exports.default = Chart;