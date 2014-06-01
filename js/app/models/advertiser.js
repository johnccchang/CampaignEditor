define(function(require) {
	"use strict";
	
	var app       = require('app'),
		Campaign  = require('app/models/campaign'),
		Campaigns = require('app/collections/campaigns');
        
	return Backbone.RelationalModel.extend({
		relations:[{
			type: Backbone.HasMany,
			key: 'campaigns',
			relatedModel: Campaign,
			collectionType: Campaigns
		}],
		defaults : {
			name : "advertiser",
			agency_id : ""
		},
		initialize : function() {
		}
	});
}); 