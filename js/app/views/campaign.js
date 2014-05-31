define(function(require) {
	"use strict";
	
	var $        = require('jquery'),
		_        = require('underscore'),
        Backbone = require('backbone'),
        tpl      = require('text!tpl/campaign.html');
	
	return Backbone.View.extend({
		tagName : 'tr',
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
