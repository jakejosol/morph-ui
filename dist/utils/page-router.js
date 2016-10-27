'use strict';

// References
var Backbone = require('backbone');

module.exports = Backbone.Router.extend({
    routes: {
        '': 'getDefaultRoute',
        '!/:name': 'getRoute'
    },
    getDefaultRoute: function getDefaultRoute() {
        this.current = 'default';
    },
    getRoute: function getRoute(name) {
        this.current = name;
    }
});