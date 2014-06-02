define(function(require) {	
	"use strict";
	
	var app              = require('app'),
		tpl              = require('text!tpl/home.html'),
		RelationHelper   = require('relationhelper'),
		FormView         = require('app/views/selectOwnerForm'),
		CampaignFormView = require('app/views/campaignsForm');
		
	return Backbone.View.extend({
		el: '#content',
		initialize: function() {
			// fetch data from remote server by RelationHelper();
			this.collections = new RelationHelper();
			console.log(this.collections);
		},
        template: _.template(tpl),
        render: function () {
        	this.$el.empty().append(this.template());
        	this.form = new FormView();
        	this.$('#owner_menu').append(this.form.render().el);
            return this;
        },
        showCampaignsForm: function() {
        	this.$('#campaign_list').empty();
        	this.table = new CampaignFormView();
        	this.$('#campaign_list').append(this.table.render().el);
        	return this;
        }
	});
}); 