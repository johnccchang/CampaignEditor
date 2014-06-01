define(function(require) {
	"use strict";
	
	var app    = require('app'),
        API    = require('api'),
        Agency = require('app/models/agency');

	return Backbone.Collection.extend({
		model: Agency,
		url: API.get('agencies')
	});
}); 