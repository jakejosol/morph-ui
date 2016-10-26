// References
import React from 'react';
import _ from 'underscore';

// Components
import Chart from './chart';

export default class LineGraph extends React.Component {

	constructor(props) {
		super(props);
		this.state = { series: [], labels: [] };
		this.update = this.update.bind(this);
		this.getSeries = this.getSeries.bind(this);
	}

	componentDidMount() {
		this.update(this.props);
	}

	componentWillReceiveProps(props) {
		this.update(props);
	}

	update(props) {
		if (!props.values) return;
		var datavalues = props.values;

		// Prepare parameters
		var zValues = {};
		var series = [];
		var labels = [];

		for (var index in datavalues) {
			var row = datavalues[index];
			var label = row.label;
			if (!_.find(labels, label)) labels.push(label);

			for (var key in row.values) {
				if (!zValues[key]) zValues[key] = {};
				zValues[key][label] = row.values[key];
			}
		}

		for (var seriesName in zValues) {
			series.push({
				name: seriesName,
				values: _.map(zValues[seriesName], value => value),
				type: 'spline'
			});
		}

		this.setState({ series: series, labels: labels });
	}

	getSeries() {
		var index = 0;
		return this.state.series.map(function (series) {
			var seriesItem = { name: series.name, data: series.values, type: series.type };
			if (this.props.opposite) seriesItem.yAxis = index++;
			return seriesItem;
		}.bind(this));
	}

	render() {
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

		return React.createElement(
			'div',
			{ className: 'line-graph' },
			React.createElement(Chart, { config: config })
		);
	}
}