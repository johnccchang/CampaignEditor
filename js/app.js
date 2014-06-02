require.config({
	baseUrl: 'js/lib',
	paths: {
		'app': '../app',
		'tpl': '../tpl',
		'api': 'apihelper'
	},
	shim: {
		'jquery': { exports: '$' },
		'underscore': { exports: '_' },
		'backbone' : { 
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		
		// set up dependencies for Backbone-relational.
    	'backbone-relational': ['backbone'],

    	// set up dependencies for the main application.
    	'app': ['backbone', 'backbone-relational']
	}
});

require(['app/router'], function (Router) {
    var router = new Router();
    Backbone.history.start();
});