define(function(require) {
	"use strict";
	
	var $        = require('jquery'),
        Backbone = require('backbone'),
        API      = require('api'),
        Campaign = require('app/models/campaign');

	return Backbone.Collection.extend({
		model: Campaign,
		url: API.get('campaigns')
	});
}); 