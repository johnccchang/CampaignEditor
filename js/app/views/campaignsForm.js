define(function(require) {	
	"use strict";
	
	var app           = require('app'),
		tpl           = require('text!tpl/campaignsForm.html'),
		Campaigns	  = require('app/collections/campaigns'),
		CampaignsView = require('app/views/campaigns');
	
	return Backbone.View.extend({
		el: '#campaign_list',
		initialize: function(options) {
			_.extend(this, options); // extend properties from options to get message refercence;
			this.campaigns = new Campaigns();
		},
        template: _.template(tpl),
        render: function(advertiser) {
			this.campaigns.reset(advertiser.campaigns);
            this.campaignsView = new CampaignsView({ collection: this.campaigns });
            this.$el.empty().append(this.template(tpl)).find('.fields').append(this.campaignsView.render().el);
            this.setDatePicker();
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
			if (checkeds.length > 0) {
				// update all checked campaings one by one
        		_.each(records, function(record) {
        			var campaign   = this.campaigns.findWhere({ '_id': record.id }),
        				attributes = _.omit(record, 'id'),
        				self       = this;
        			
        			campaign.save(attributes, {
        				success: function(model, response, options) {
        					model.attributes = _.first(response.campaigns);
        					self.message.show('success');
        					self.cancelAll({target: self.$('input:checkbox:eq(0)') });
        				},
        				error: function(model, response, options) {
        					self.message.show('error');
        				}
        			});
        		}, this);
        	} else {
        		this.message.show('error', 'You have to select at least one record to be updated.');
        	}
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
        },
        setDatePicker: function() {
        	this.$('.time-selector').datetimepicker({
            	pickTime: false
            }).each(function() {
            	var date    = new Date($(this).find('input').val());
            	var dateStr = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear().toString().substring(2);
            	$(this).data("DateTimePicker").setDate(dateStr);
            }).on('change', function() {
            	// when date change, convert the date to UTC string and put into hidden field.
            	var date = new Date($(this).find('input').val());
            	$(this).parents('td').find('input[name]').val(date.toISOString());
            });
        }
	});
}); 