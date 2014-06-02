define(function(require) {
	"use strict";
	
	var app         = require('app'),
		API         = require('api'),
		field       = 'campaigns';
        
	return Backbone.RelationalModel.extend({
		defaults : {
			name : "campaign_0"
		},
		url: function() {
			return API.post(field, this.attributes._id);
		}
	});
});
