// References
import React from 'react';
import _ from 'underscore';

// Components
import Chart from './chart';

export default class BarStack extends React.Component {

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
				values: _.map(zValues[seriesName], value => value)
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

		var config = {
			chart: { type: 'bar', height: this.props.height || 250 },
			title: { text: '' },
			xAxis: { title: { text: this.props.axes.y }, categories: this.state.labels },
			yAxis: { title: { text: this.props.axes.x } },
			series: this.getSeries()
		};

		return React.createElement(
			'div',
			{ className: 'bar-stack' },
			React.createElement(Chart, { config: config })
		);
	}
}