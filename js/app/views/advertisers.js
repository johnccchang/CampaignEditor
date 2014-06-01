define(function(require) {	
	"use strict";
	
	var $              = require('jquery'), 
		_              = require('underscore'),
		Backbone       = require('backbone'),
		tpl            = require('text!tpl/defaultOption.html'),
		AdvertiserView = require('app/views/advertiser');
	
	return Backbone.View.extend({
		tagName: 'select',
        initialize: function () {
        	this.$el.append(this.template({'entity': 'advertiser'}));
            //this.collection.on('add', this.addOne, this);
        },
        template: _.template(tpl),
        render: function () {
            this.collection.each(this.addOne, this);
            return this;
        },
        addOne: function (advertiser) {
            var advertiserView = new AdvertiserView({
                model: advertiser
            });
            this.$el.append(advertiserView.el);
        }
	});
}); 