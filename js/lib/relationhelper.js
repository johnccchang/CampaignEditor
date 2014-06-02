define(function(require) {
	"use strict";
	
	var app         = require('app'),
	    Agencies    = require('app/collections/agencies'),
	    Advertisers = require('app/collections/advertisers'),
	    Campaigns   = require('app/collections/campaigns');
   	
   	return function() {
   		this.collections             = {};
   		this.collections.agencies    = new Agencies();
   		this.collections.advertisers = new Advertisers();
   		this.collections.campaigns   = new Campaigns();
   		
   		var self = this.collections;
   		self.agencies.fetch();
   		self.advertisers.fetch();
   		self.campaigns.fetch();
        
        // set up relation among collections only when all of them have got 
        // populated after fetching from remote server.
        $(document).ajaxSuccess(function(event, xhr, settings) {
        	if (self.agencies.models.length > 0 && self.advertisers.models.length > 0 && self.campaigns.models.length > 0) {
        		// set up relation between Agency and Advertiser
        		_.each(self.agencies.models, function(agency) {
       				agency.advertisers = self.advertisers.where({ 'agency_id': agency.attributes._id });
       			}, self);
       
   				// set up relation between Advertiser and CampaingRelation
        		_.each(self.advertisers.models, function(advertiser) {
       				advertiser.campaigns = self.campaigns.where({ 'advertiser_id': advertiser.attributes._id });
       			}, self);
       			
       			$(document).unbind('ajaxSuccess');
       			console.log('data is loaded successfully!!');
       		}
        });
        return self;
    };
});