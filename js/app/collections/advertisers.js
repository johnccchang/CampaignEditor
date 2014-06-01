define(function(require) {
	"use strict";
	
	var app 	   = require('app'),
        API        = require('api'),
        Advertiser = require('app/models/advertiser');
		
	return Backbone.Collection.extend({
		model: Advertiser,
		url: API.get('advertisers')
	});
}); 