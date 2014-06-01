define(function(require) {
	"use strict";
	
	var app         = require('app'), 
		Advertiser  = require('app/models/advertiser'),
		Advertisers = require('app/collections/advertisers');
 
	return Backbone.RelationalModel.extend({
		relations:[{
			type: Backbone.HasMany,
			key: 'advertisers',
			relatedModel: Advertiser,
			collectionType: Advertisers
		}]
	});
});
