module.exports = {

     Templates: {
        Page: require('./charts/templates/page')
    },

     Charts: {
        BarStack: require('./charts/bar-stack'),
        LineGraph: require('./charts/line-graph'),
        PieChart: require('./charts/pie-chart')
    },

     Form: {
        Checkbox: require('./form/checkbox'),
        CheckboxGroup: require('./form/checkbox-group'),
        InputDate: require('./form/input-date'),
        InputFile: require('./form/input-file'),
        InputGroup: require('./form/input-group'),
        InputMoney: require('./form/input-money'),
        InputNumber: require('./form/input-number'),
        Radio: require('./form/radio'),
        RadioGroup: require('./form/radio-group'),
        Textarea: require('./form/textarea')
    },

     Layout: {
        AppBar: require('./layout/app-bar'),
        Card: require('./form/card'),
        CardLoader: require('./form/card-loader'),
        Column: require('./form/column'),
        Container: require('./form/container'),
        Content: require('./form/content'),
        InfoCard: require('./form/info-card'),
        NavBar: require('./form/nav-bar'),
        Side: require('./form/side'),
        SideMenu: require('./form/side-menu'),
        Table: require('./form/table')
    },

     Widgets: {
        Button: require('./widgets/button'),
        ButtonGroup: require('./widgets/button-group'),
        Icon: require('./widgets/icon'),
        Logo: require('./widgets/logo'),
        TextButton: require('./widgets/text-button')
    }
}