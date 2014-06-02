define(function(require) {	
	"use strict";
	
	var app              = require('app'),
		tpl              = require('text!tpl/home.html'),
		RelationHelper   = require('relationhelper'),
		FormView         = require('app/views/selectOwnerForm');
		
	return Backbone.View.extend({
		el: '#content',
		initialize: function() {
			// fetch data from remote server by RelationHelper();
			this.collections = new RelationHelper();
		},
        template: _.template(tpl),
        render: function () {
        	this.$el.empty().append(this.template());
        	this.form = new FormView(this.collections);
        	this.$('#owner_menu').append(this.form.render().el);
            return this;
        }
	});
}); 