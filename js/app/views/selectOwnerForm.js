define(function(require) {	
	"use strict";
	
	var app 		    = require('app'),
		tpl             = require('text!tpl/selectOwnerForm.html'),
		Agencies        = require('app/collections/agencies'),
		AgenciesView    = require('app/views/agencies'),
		Advertisers     = require('app/collections/advertisers'),
		AdvertisersView = require('app/views/advertisers');
		
	return Backbone.View.extend({
        template: _.template(tpl),
        render: function () {
            this.$el.empty().append(this.template());
            this.agencies    = new AgenciesView({ collection: new Agencies() });
            this.advertisers = new AdvertisersView({ collection: new Advertisers() });
            this.$('#fields').append(this.agencies.render().el).append(this.advertisers.render().el);
            return this;
        }
	});
}); 