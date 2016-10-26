// References
import React from 'react';

// Components
import Chart from './chart';

export default class PieChart extends React.Component {

	constructor(props) {
		super(props);
		this.state = { series: [] };
		this.update = this.update.bind(this);
		this.getSeries = this.getSeries.bind(this);
	}

	componentDidMount() {
		this.update(this.props);
	}

	componentWillReceiveProps(props) {
		this.update(props);
	}

	update (props) {
		if(!props.values) return;

		// Prepare parameters
		var series = [];

		// Loop through the result
		for(var i in props.values)
		{
			var item = props.values[i];
			var label = item[props.label];
			var value = item[props.value];

			series.push({ name: label, y: value });
		}

		// Set the state
		this.setState({ series: series });
	}

	getSeries() {
		return [{
			name: this.props.name, 
			colorByPoint: true, 
			data: this.state.series
		}];
	}

	render() {
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
		
		return <div className='pie-chart'>
			<Chart config={config} />
		</div>;
	}
}