define(function(require) {	
	"use strict";
	
	var app           = require('app'),
		tpl           = require('text!tpl/campaigns.html'),
		Campaigns	  = require('app/collections/campaigns'),
		CampaignsView = require('app/views/campaigns');
	
	return Backbone.View.extend({
		initialize: function() {
			
		},
        template: _.template(tpl),
        render: function(advertiser, caller) {
			if (caller.populates.campaigns === undefined ) {
				var self = this;
				this.campaigns = new Campaigns();
           		this.campaigns.fetch({
           			success: function(collection, res, options) {
           				self.setAdvertiserAndCampaingRelation(caller);
           				caller.campaigns = collection;
           				//var related = caller.campaigns.where({ 'advertiser_id': advertiser });
			    		//var campaignsView = new CampaignsView({ collection:  });
			    		
           			}
            	});
			} else {
				
			}
            return this;
        },
        setAdvertiserAndCampaingRelation: function(caller) {
        	_.each(caller.advertisers.models, function(advertiser) {
        		console.log("-->" + advertiser.attributes._id);
        		console.log(this.campaigns.where({ 'advertiser_id': advertiser.attributes._id }).length);
        		advertiser.campaigns = this.campaigns.where({ 'advertiser_id': advertiser.attributes._id });
        	}, this);
        },
        getCampaigns: function(advertiser) {
    		var campaigns = new Campaigns();
           	campaigns.fetch({
           		success: function(collection, res, options) {
           			collection.set(res.campaigns);
			    	var campaignsView = new CampaignsView({ collection: collection });
			    	$('#content').append(campaignsView.render().el);
           		}
            });
    	}
	});
}); 