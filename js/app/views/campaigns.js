define(function(require) {	
	"use strict";
	
	var $            = require('jquery'), 
		_            = require('underscore'),
		Backbone     = require('backbone'),
		CampaignView = require('app/views/campaign');
	
	return Backbone.View.extend({
		tagName: 'table',
        initialize: function () {
            //this.collection.on('add', this.addOne, this);
        },
        render: function () {
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