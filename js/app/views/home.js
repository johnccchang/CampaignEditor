define(function(require) {	
	"use strict";
	
	var app            = require('app'),
		tpl            = require('text!tpl/home.html'),
		RelationHelper = require('relationhelper'),
		FormView       = require('app/views/selectOwnerForm'),
		MessageView    = require('app/views/message');
		
	return Backbone.View.extend({
		el: '#content',
		initialize: function() {
			// fetch data from remote server by RelationHelper();
			this.collections = new RelationHelper();
			this.message     = new MessageView();
		},
        template: _.template(tpl),
        render: function () {
        	this.$el.empty().append(this.template());
        	this.form = new FormView(this.collections, this.message);
        	this.$('#owner_menu').append(this.form.render().el);
            return this;
        }
	});
}); 