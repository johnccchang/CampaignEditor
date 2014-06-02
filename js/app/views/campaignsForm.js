define(function(require) {	
	"use strict";
	
	var app           = require('app'),
		tpl           = require('text!tpl/campaignsForm.html'),
		Campaigns	  = require('app/collections/campaigns'),
		CampaignsView = require('app/views/campaigns');
	
	return Backbone.View.extend({
		el: '#campaign_list',
		initialize: function() {
			this.campaigns = new Campaigns();
		},
        template: _.template(tpl),
        render: function(advertiser) {
			this.campaigns.reset(advertiser.campaigns);
            this.campaignsView = new CampaignsView({ collection: this.campaigns });
            this.$el.empty().append(this.template(tpl)).find('.fields').append(this.campaignsView.render().el);
            return this;
        },
        events: {
        	'click button': 'saveData',
        	'click input:checkbox.select-all': 'checkAll',
        	'click input:checkbox.cancel-all': 'cancelAll'
        },
        saveData: function(e) {
        	var checkeds = this.$('input:checkbox:gt(0):checked');
        	var records  = this.getRecords(checkeds);
			
			// update all checked campaings one by one
        	_.each(records, function(record) {
        		var campaign = this.campaigns.findWhere({ '_id': record.id });
        		var attributes = _.omit(record, 'id');
        		campaign.save(attributes, {
        			success: function(model, response, options) {
        				model.attributes = _.first(response.campaigns);
        			}
        		});
        	}, this);
        	alert('save data');
        },
        checkAll: function(e) {
        	$(e.target).removeClass('select-all').addClass('cancel-all');
        	this.$('input:checkbox:gt(0)').prop('checked', true);
        },
        cancelAll: function(e) {
        	$(e.target).removeClass('cancel-all').addClass('select-all');
        	this.$('input:checkbox:gt(0)').prop('checked', false);
        },
        getRecords: function($targets) {
        	var records = [];
        	$targets.each(function() {
        		var elements = $(this).parents('tr').find('[name]');
        		var data = {};
        		$.each(elements, function(i, el){
        			data[el.name] = $(el).val();
        		});
        		records.push(data);
        	});
        	return records;
        }
	});
}); 