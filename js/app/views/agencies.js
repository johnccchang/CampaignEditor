define(function(require) {	
	"use strict";
	
	var app 	   = require('app'),
		tpl        = require('text!tpl/defaultOption.html'),
		AgencyView = require('app/views/agency');
	
	return Backbone.View.extend({
		tagName: 'select',
        initialize: function () {
        	this.$el.append(this.template({'entity': 'agency'}));
            this.collection.on('add', this.addOne, this);
        },
        template: _.template(tpl),
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