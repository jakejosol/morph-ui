// References
var Backbone = require('backbone');

module.exports = Backbone.Router.extend({
    routes: {
        '' : 'getDefaultRoute',
        '!/:name' : 'getRoute'
    },
    getDefaultRoute: function() {
        this.current = 'default';
    },
    getRoute: function(name) {
        this.current = name;
    }
});