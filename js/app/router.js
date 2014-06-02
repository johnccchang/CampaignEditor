define(function (require) {
    "use strict";

	var app 		    = require('app'),
		HomeView        = require('app/views/home');
	/*
		Campaigns	    = require('app/collections/campaigns'),
		CampaignsView   = require('app/views/campaigns');
*/
    return Backbone.Router.extend({
        routes: {
            "": "home"
        },
		initialize: function() {
			//this.home();
		},
        home: function () {
        	var homeView = new HomeView();
        	$('#content').append(homeView.render().el);
        	
        	/*
            
            var campaigns = new Campaigns();
            campaigns.fetch({
            	success: function(collection, res, options) {
            		collection.set(res.campaigns);
				    var campaignsView = new CampaignsView({ collection: collection });
				    $('#content').append(campaignsView.render().el);
            	}
            });
            */
            
            console.log('homepage rendered!');
        }
    });
});