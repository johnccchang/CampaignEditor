define(function(require) {
	"use strict";
	
	var $         = require('jquery'),
	    api_url   = 'http://challenge.mediamath.com/api/',
        api_token = '4e3344ff9e9d165ecba5410ca3476b9272bced43';
   	
   	return {
   		'get': function(service, id) {
   			var url = api_url + service + '?api_token=' + api_token;
   			return url;
   		},
   		'parse': function(field) {
   			return function(response) {
   				return response[field];
   			};
  		}
   	};
});
