define(function(require) {
	"use strict";
	
	var app      = require('app'),
        API      = require('api'),
        Campaign = require('app/models/campaign');

	return Backbone.Collection.extend({
		model: Campaign,
		url: API.get('campaigns')
	});
}); 