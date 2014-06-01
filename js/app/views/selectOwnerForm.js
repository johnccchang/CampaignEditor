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
			this.agencies    = new Agencies();
			this.advertisers = new Advertisers();
			this.agencies.fetch();
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
        	'click input:submit': 'getCampaigns'
        },
        getCampaigns: function() {
        	alert('click');
        	this.$('form').submit(function() {
        		return false;
        	});
        }
	});
}); 