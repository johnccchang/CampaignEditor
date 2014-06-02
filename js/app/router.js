define(function (require) {
    "use strict";

	var app      = require('app'),
		HomeView = require('app/views/home');
		
    return Backbone.Router.extend({
        routes: {
            "": "home"
        },
        home: function () {
        	var homeView = new HomeView();
        	$('#content').append(homeView.render().el);
        }
    });
});