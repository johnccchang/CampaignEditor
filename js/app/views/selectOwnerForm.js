define(function(require) {	
	"use strict";
	
	var app 		      = require('app'),
		tpl               = require('text!tpl/selectOwnerForm.html'),
		Agencies          = require('app/collections/agencies'),
		AgenciesView      = require('app/views/agencies'),
		Advertisers       = require('app/collections/advertisers'),
		AdvertisersView   = require('app/views/advertisers'),
		CampaignsFormView = require('app/views/campaignsForm');
		
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
        	'click button': 'redrawCampaigns',
        	'change select.agency': 'redrawAdvertisers'
        },
        setAgencyAndAdvertiserRelation: function() {
        	_.each(this.agencies.models, function(agency) {
        		agency.advertisers = this.advertisers.where({ 'agency_id': agency.attributes._id });
        	}, this);
        },
        redrawAdvertisers: function(e) {
        	var self      = this,
        		agency_id = $('option:selected', e.target).val();
        	if (this.populates.advertisers === undefined ) {
        		this.advertisers.fetch({
        			success: function(collection, res, options) { 
        				self.setAgencyAndAdvertiserRelation();
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
        redrawCampaigns: function() {
        	this.$('form').submit(function() { return false; });
        	var agency     = this.$('form select option:selected:eq(0)').val(),
        		advertiser = this.$('form select option:selected:eq(1)').val();
 			//console.log(this.$('form').serialize());
 			if (agency != -1 && advertiser != -1) {
 				var campaignsFormView = new CampaignsFormView();
 				campaignsFormView.render(advertiser, this);
 			} else {
 				alert('you have to choose agency and advertiser!');
 			}
        }
	});
}); 