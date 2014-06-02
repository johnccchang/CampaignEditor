define(function(require) {	
	"use strict";
	
	var app 		   = require('app'),
		tpl            = require('text!tpl/genericSelector.html'),
		AdvertiserView = require('app/views/advertiser');
	
	return Backbone.View.extend({
        initialize: function () {
        	this.$el.append(this.template({ field: 'Advertiser', name: 'advertiser'}));
            this.collection.on('add', this.addOne, this);
        },
        template: _.template(tpl),
        render: function () {
        	this.$('select option:gt(0)').remove();
            this.collection.each(this.addOne, this);
            return this;
        },
        remove: function() {
        	this.$('select option:gt(0)').remove();
        	return this;
        },
        addOne: function (advertiser) {
            var advertiserView = new AdvertiserView({
                model: advertiser
            });
            this.$('select').addClass('advertiser').append(advertiserView.el);
        }
	});
}); 