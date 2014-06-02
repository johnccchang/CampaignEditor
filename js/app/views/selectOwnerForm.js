define(function(require) {	
	"use strict";
	
	var app 		      = require('app'),
		tpl               = require('text!tpl/selectOwnerForm.html'),
		AgenciesView      = require('app/views/agencies'),
		Advertisers       = require('app/collections/advertisers'),
		AdvertisersView   = require('app/views/advertisers'),
		CampaignsFormView = require('app/views/campaignsForm');
		
	return Backbone.View.extend({
		initialize: function (options) {
			_.extend(this, options);
			this.campaignsFormView = new CampaignsFormView(options);
			this.advertisers       = new Advertisers();
		},
        template: _.template(tpl),
        render: function () {
            this.$el.empty().append(this.template());
            this.agenciesView    = new AgenciesView({ collection: this.collections.agencies });
            this.advertisersView = new AdvertisersView({ collection: this.advertisers });
            this.$('#fields').append(this.agenciesView.render().el).append(this.advertisersView.render().el);
            return this;
        },
        events: {
        	'click button': 'redrawCampaigns',
        	'change select.agency': 'redrawAdvertisers'
        },
        redrawAdvertisers: function(e) {
        	var agency_id = $('option:selected', e.target).val();
        	if (agency_id != '-1') {
        		this.advertisers.reset(this.collections.agencies.findWhere({ '_id': agency_id }).advertisers);
        		this.advertisersView.render();
        	} else this.advertisersView.remove();
        },
        redrawCampaigns: function() {
        	this.$('form').submit(function() { return false; });
        	var agency     = this.$('form select option:selected:eq(0)').val(),
        		advertiser = this.$('form select option:selected:eq(1)').val();

 			if (agency != -1 && advertiser != -1) {
 				var advertiser = this.advertisers.findWhere({ '_id': advertiser }); 
 				this.campaignsFormView.render(advertiser);
 			} else {
 				this.message.show('error', 'you have to choose agency and advertiser!');
 			}
        }
	});
}); 