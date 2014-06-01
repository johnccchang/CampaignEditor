define(function(require) {
	"use strict";
	
	var app = require('app'),
        tpl = require('text!tpl/campaign.html');
	
	return Backbone.View.extend({
		tagName : 'tr',
		initialize : function() {
			this.render();
		},
		template : function(campaign) {
			return _.template(tpl, { campaign: _.values(_.omit(campaign, ['_id', 'advertiser_id'])) });
		},
		render : function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
});
