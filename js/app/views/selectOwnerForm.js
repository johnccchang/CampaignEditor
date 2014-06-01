define(function(require) {	
	"use strict";
	
	var app 		    = require('app'),
		tpl             = require('text!tpl/selectOwnerForm.html'),
		Agencies        = require('app/collections/agencies'),
		AgenciesView    = require('app/views/agencies'),
		Advertisers     = require('app/collections/advertisers'),
		AdvertisersView = require('app/views/advertisers');
		
	return Backbone.View.extend({
		initialize: function () {
			this.populates   = {};
			this.agencies    = new Agencies();
			this.advertisers = new Advertisers();
			var self         = this.populates;
			this.agencies.fetch({
				success: function(collection, res, options) { self.agencies = true; }
			});
		},
        template: _.template(tpl),
        render: function () {
            this.$el.empty().append(this.template());
            this.agenciesView    = new AgenciesView({ collection: this.agencies });
            this.advertisersView = new AdvertisersView({ collection: this.advertisers });
            this.$('#fields').append(this.agenciesView.render().el).append(this.advertisersView.render().el);
            return this;
        },
        events: {
        	'click input:submit': 'getCampaigns',
        	'change select.agency': 'redrawAdvertisers'
        },
        setRelation: function() {
        	_.each(this.agencies.models, function(agency) {
        		agency.advertisers = this.advertisers.where({ 'agency_id': agency.attributes._id });
        	}, this);
        },
        redrawAdvertisers: function(e) {
        	var self      = this, 
        		agency_id = $(e.target).find(':selected option').val();
        	if (this.populates.advertisers === undefined ) {
        		this.advertisers.fetch({
        			success: function(collection, res, options) { 
        				self.setRelation();
        				self.advertisers.reset(self.agencies.findWhere({ '_id': agency_id }).advertisers);
        				self.advertisersView.render();
        			}
        		});
        		this.populates.advertisers = true;
        	} else {
        		self.advertisers.reset(self.agencies.findWhere({ '_id': agency_id }).advertisers);
        		self.advertisersView.render();
        	}
        },
        getCampaigns: function() {
        	alert('click');
        	this.$('form').submit(function() {
        		return false;
        	});
        }
	});
}); 