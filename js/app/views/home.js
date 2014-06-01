define(function(require) {	
	"use strict";
	
	var app      = require('app'),
		tpl      = require('text!tpl/home.html'),
		FormView = require('app/views/selectOwnerForm');
	
	return Backbone.View.extend({
		el: '#content',
        template: _.template(tpl),
        render: function () {
        	this.$el.empty().append(this.template());
        	this.form = new FormView();
        	this.$('#owner_menu').append(this.form.render().el);
            return this;
        }
	});
}); 