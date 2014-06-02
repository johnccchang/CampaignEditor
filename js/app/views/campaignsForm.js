define(function(require) {	
	"use strict";
	
	var app           = require('app'),
		tpl           = require('text!tpl/campaignsForm.html'),
		Campaigns	  = require('app/collections/campaigns'),
		CampaignsView = require('app/views/campaigns');
	
	return Backbone.View.extend({
		el: '#campaign_list',
		initialize: function() {
			this.campaigns = new Campaigns();
		},
        template: _.template(tpl),
        render: function(advertiser) {
			this.campaigns.reset(advertiser.campaigns);
            this.campaignsView = new CampaignsView({ collection: this.campaigns });
            this.$el.empty().append(this.template(tpl)).find('.fields').empty().append(this.campaignsView.render().el);
            return this;
        },
        events: {
        	'click button': 'save'
        },
        save: function() {
        	alert('save data');
        }
	});
}); 