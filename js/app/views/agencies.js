define(function(require) {	
	"use strict";
	
	var $          = require('jquery'), 
		_          = require('underscore'),
		Backbone   = require('backbone'),
		AgencyView = require('app/views/agency');
	
	return Backbone.View.extend({
		tagName: 'select',
        initialize: function () {
            this.collection.on('add', this.addOne, this);
        },
        render: function () {
            this.collection.each(this.addOne, this);
            return this;
        },
        addOne: function (agency) {
            var agencyView = new AgencyView({
                model: agency
            });
            this.$el.append(agencyView.el);
        }
	});
}); 