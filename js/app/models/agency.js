define(function(require) {
	"use strict";
	
	var app = require('app');
        
	return Backbone.RelationalModel.extend({
		relations:[{
			type: Backbone.HasMany,
			key: 'animals',
			relatedModel: 'Advertiser',
			collectionType: 'Advertisers'
		}]
	});
});
