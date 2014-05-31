define(function(require) {
	"use strict";
	
	var $          = require('jquery'),
        Backbone   = require('backbone'),
        API        = require('api'),
        Advertiser = require('app/models/advertiser');
		
	return Backbone.Collection.extend({
		model: Advertiser,
		url: API.get('advertisers')
	});
}); 