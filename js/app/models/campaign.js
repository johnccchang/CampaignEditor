define(function(require) {
	"use strict";
	
	var app = require('app');
        
	return Backbone.RelationalModel.extend({
		defaults : {
			name : "campaign_0"
		}
	});
});
