// References
import React from 'react';
import Highcharts from 'highcharts';

// Modules
import HighchartsExporting from 'highcharts/modules/exporting';

export default class Chart extends React.Component {

    constructor(props) {
        super(props);
        this.disableCredits = this.disableCredits.bind(this);
        this.enableExporting = this.enableExporting.bind(this);
    }
    
    componentDidMount() {
        this.renderChart(this.props.type, this.props.config);
    }

    componentWillReceiveProps(props) {
        this.renderChart(props.type, props.config);
    }

    disableCredits(config) {
        // Remove credits
        config.credits = {
            enabled: false
        };
    }

    enableExporting(config) {
        if(this.props.exportingEnabled)
        {
            // Activate exporting
            HighchartsExporting(Highcharts);

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
        else
        {
            config.exporting = {
                enabled: false
            };
        }
    }

    renderChart(type, config) {
        // Check if config exists
        if (!config) {
            throw new Error('Config must be specified for the ' + displayName + ' component');
        }
        
        // Adjust configuration
        this.disableCredits(config);
        this.enableExporting(config);
        
        // Set container which the chart should render to.
        this.chart = new Highcharts[type || "chart"](
            this.refs.chart,
            config
        );
    }

    componentWillUnmount() {        
        this.chart.destroy();
    }

    render() {        
        return <div className='chart' ref='chart' />;
    }
}