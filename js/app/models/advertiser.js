define(function(require) {
	"use strict";
	
	var $        = require('jquery'),
		_        = require('underscore'),
        Backbone = require('backbone');
        
	return Backbone.Model.extend({
		defaults : {
			name : "agency",
			agency_id : ""
		},
		initialize : function() {
		}
	});
}); 