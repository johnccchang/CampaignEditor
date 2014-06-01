define(function(require) {
	"use strict";
	
	var app = require('app');
	
	return Backbone.View.extend({
		tagName : 'option',
		initialize : function() {
			this.render();
		},
		render : function() {
			this.$el.prop('value', this.model.attributes._id).append(this.model.attributes.name);
			return this;
		}
	});
});
