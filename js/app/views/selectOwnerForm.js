define(function(require) {	
	"use strict";
	
	var $               = require('jquery'), 
		_               = require('underscore'),
		Backbone        = require('backbone'),
		tpl             = require('text!tpl/selectOwnerForm'),
		AgenciesView    = require('app/views/agencies'),
		AdvertisersView = require('app/views/advertisers');
	
	return Backbone.View.extend({
		el: "#selectOwnerForm",
        initialize: function () {
            //this.collection.on('add', this.addOne, this);
        },
        template: _.template(tpl),
        render: function () {
            //this.collection.each(this.addOne, this);
            
            return this;
        },
        initialSelect: function() {
        	var agencies = new Agencies();
        	
        },
        addOne: function (agency) {
            var agencies = new Agencies();
            agencies.fetch({
            	success: function(collection, res, options) {
				    collection.set(res.agencies);
				    var agenciesView = new AgenciesView({ collection: collection });
				    $('#content').append(agenciesView.render().el);
				}
            });
        }
	});
}); 