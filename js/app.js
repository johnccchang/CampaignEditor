require.config({
	baseUrl: 'js/lib',
	paths: {
		'app': '../app',
		'tpl': '../tpl',
		'api': 'apihelper',
		'bootstrap': 'bootstrap.min',
		'moment': 'moment.min',
		'datetimepicker': 'bootstrap-datetimepicker.min'
	},
	shim: {
		'jquery': { exports: '$' },
		'underscore': { exports: '_' },
		'backbone' : { 
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		// set up dependencies for bootstrap
		'bootstrap': ['jquery'],
		
		// set up dependencies for datetimepicker
		'datetimepicker': ['bootstrap', 'moment'],
		
		// set up dependencies for Backbone-relational.
    	'backbone-relational': ['backbone'],

    	// set up dependencies for the main application.
    	'app': ['backbone', 'backbone-relational', 'bootstrap', 'datetimepicker']
	}
});

require(['app/router'], function (Router) {
    var router = new Router();
    Backbone.history.start();
});