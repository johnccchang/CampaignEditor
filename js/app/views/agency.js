define(function(require) {
	"use strict";
	
	var app = require('app'),
        tpl = require('text!tpl/agency.html');
	
	return Backbone.View.extend({
		tagName : 'option',
		initialize : function() {
			this.render();
		},
		template : _.template(tpl),
		render : function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
});
