define(function(require) {	
	"use strict";
	
	var app = require('app'),
		tpl = require('text!tpl/home.html');
	
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