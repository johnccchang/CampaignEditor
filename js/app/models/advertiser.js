define(function(require) {
	"use strict";
	
	var app = require('app');
        
	return Backbone.RelationalModel.extend({
		defaults : {
			name : "advertiser",
			agency_id : ""
		},
		initialize : function() {
		}
	});
}); 