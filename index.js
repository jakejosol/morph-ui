module.exports = {

     Templates: {
        Page: require('./components/templates/page')
    },

     Charts: {
        BarStack: require('./components/charts/bar-stack'),
        LineGraph: require('./components/charts/line-graph'),
        PieChart: require('./components/charts/pie-chart')
    },

     Form: {
        Checkbox: require('./components/form/checkbox'),
        CheckboxGroup: require('./components/form/checkbox-group'),
        InputDate: require('./components/form/input-date'),
        InputFile: require('./components/form/input-file'),
        InputGroup: require('./components/form/input-group'),
        InputMoney: require('./components/form/input-money'),
        InputNumber: require('./components/form/input-number'),
        Radio: require('./components/form/radio'),
        RadioGroup: require('./components/form/radio-group'),
        Textarea: require('./components/form/textarea')
    },

     Layout: {
        AppBar: require('./components/layout/app-bar'),
        Card: require('./components/form/card'),
        CardLoader: require('./components/form/card-loader'),
        Column: require('./components/form/column'),
        Container: require('./components/form/container'),
        Content: require('./components/form/content'),
        InfoCard: require('./components/form/info-card'),
        NavBar: require('./components/form/nav-bar'),
        Side: require('./components/form/side'),
        SideMenu: require('./components/form/side-menu'),
        Table: require('./components/form/table')
    },

     Widgets: {
        Button: require('./components/widgets/button'),
        ButtonGroup: require('./components/widgets/button-group'),
        Icon: require('./components/widgets/icon'),
        Logo: require('./components/widgets/logo'),
        TextButton: require('./components/widgets/text-button')
    }
};