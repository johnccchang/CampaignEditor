define(function(require) {	
	"use strict";
	
	var app 		 = require('app'),
		tpl          = require('text!tpl/campaigns.html'),
		CampaignView = require('app/views/campaign');
	
	return Backbone.View.extend({
		tagName: 'table',
        initialize: function () {
            this.collection.on('add', this.addOne, this);
        },
        template: function() {
        	return _.template(tpl, { campaign: _.keys(_.omit(this.collection.models[0].attributes, ['_id', 'advertiser_id',  'user_id'])) });
        },
        render: function () {
        	this.$el.append(this.template());
            this.collection.each(this.addOne, this);
            return this;
        },
        addOne: function (campaign) {
            var campaignView = new CampaignView({
                model: campaign
            });
            this.$el.append(campaignView.el);
        }
	});
}); 