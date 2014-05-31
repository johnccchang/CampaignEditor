define(function (require) {
    "use strict";

	var $ 			    = require('jquery'), 
		_ 			    = require('underscore'),
		Backbone        = require('backbone'),
		Agencies        = require('app/collections/agencies'),
		AgenciesView    = require('app/views/agencies'),
		Advertisers     = require('app/collections/advertisers'),
		AdvertisersView = require('app/views/advertisers');

    return Backbone.Router.extend({
        routes: {
            "": "home"
        },
		initialize: function() {
			//this.home();
		},
        home: function () {
            var agencies = new Agencies();
            agencies.fetch({
            	success: function(collection, res, options) {
				    collection.set(res.agencies);
				    var agenciesView = new AgenciesView({ collection: collection });
				    $('#content').append(agenciesView.render().el);
				}
            });
            
            var advertisers = new Advertisers();
            advertisers.fetch({
            	success: function(collection, res, options) {
            		collection.set(res.advertisers);
				    var advertisersView = new AdvertisersView({ collection: collection });
				    $('#content').append(advertisersView.render().el);
            	}
            });
            
            console.log('homepage rendered!');
        }
    });
});