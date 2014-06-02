define(function(require) {
	"use strict";
	
	var app      = require('app'),
        API      = require('api'),
        Campaign = require('app/models/campaign'),
        field    = 'campaigns';

	return Backbone.Collection.extend({
		model: Campaign,
		url: API.get(field),
		parse: API.parse(field)
	});
}); 