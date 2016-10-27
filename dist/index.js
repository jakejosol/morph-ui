'use strict';

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
      Card: require('./components/layout/card'),
      CardLoader: require('./components/layout/card-loader'),
      Column: require('./components/layout/column'),
      Container: require('./components/layout/container'),
      Content: require('./components/layout/content'),
      InfoCard: require('./components/layout/info-card'),
      NavBar: require('./components/layout/nav-bar'),
      Side: require('./components/layout/side'),
      SideMenu: require('./components/layout/side-menu'),
      Table: require('./components/layout/table')
   },

   Widgets: {
      Button: require('./components/widgets/button'),
      ButtonGroup: require('./components/widgets/button-group'),
      Icon: require('./components/widgets/icon'),
      Logo: require('./components/widgets/logo'),
      TextButton: require('./components/widgets/text-button')
   }
};