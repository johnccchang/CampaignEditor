define(function(require) {	
	"use strict";
	
	var app 	   = require('app'),
		tpl        = require('text!tpl/genericSelector.html'),
		AgencyView = require('app/views/agency');
	
	return Backbone.View.extend({
        initialize: function () {
        	this.$el.append(this.template({field: 'Agency', name: 'agency'}));
            this.collection.on('add', this.addOne, this);
        },
        template: _.template(tpl),
        render: function () {
        	this.$('select option:gt(0)').empty();
            this.collection.each(this.addOne, this);
            return this;
        },
        addOne: function (agency) {
            var agencyView = new AgencyView({
                model: agency
            });
            this.$('select').append(agencyView.el);
        }
	});
}); 