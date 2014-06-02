define(function(require) {	
	"use strict";
	
	var app = require('app'),
		tpl = require('text!tpl/genericMessage.html');
		
	return Backbone.View.extend({
		className: 'modal fade',
        template: _.template(tpl),
        render: function (type, message) {
        	var msg = {
        		title: (type == 'success') ? 'Success!': 'Error!',
        		message: (type == 'success') ? 'All selected creatives have been successfully updated!':'There was an error saving your campaigns.'
        	};
        	msg.message = message || msg.message;
        	this.$el.empty().append(this.template(msg));
        	$('body').append(this.el);
            return this;
        },
        show: function(type, message) {
        	this.render(type, message);
        	$('.modal').modal('show');
        }
	});
}); 