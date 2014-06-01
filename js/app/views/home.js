define(function(require) {	
	"use strict";
	
	var $            = require('jquery'), 
		_            = require('underscore'),
		Backbone     = require('backbone'),
		tpl          = require('text!tpl/home.html');
	
	return Backbone.View.extend({
        initialize: function () {
            //this.collection.on('add', this.addOne, this);
        },
        template: _.template(tpl),
        render: function () {
        	this.$el.append(this.template);
            return this;
        }
	});
}); 