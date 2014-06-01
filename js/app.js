require.config({
	baseUrl: "js/lib",
	paths: {
		'app': '../app',
		'tpl': '../tpl',
		'api': 'apihelper'
	},
	shim: {
		'underscore': { exports: '_' },
		'backbone' : { 
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'bbrelational': {
			deps: ['jquery', 'underscore', 'backbone'],
			exports: 'Backbone.RelationalModel'
		}
	}
});

require(['jquery', 'backbone', 'app/router'], function ($, Backbone, Router) {
    var router = new Router();
    Backbone.history.start();
});