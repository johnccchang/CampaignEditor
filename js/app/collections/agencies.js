define(function(require) {
	"use strict";
	
	var $        = require('jquery'),
        Backbone = require('backbone'),
        API      = require('api'),
        Agency   = require('app/models/agency');

	return Backbone.Collection.extend({
		model: Agency,
		url: API.get('agencies')
	});
}); 