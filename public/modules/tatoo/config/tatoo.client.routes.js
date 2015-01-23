'use strict';

//Setting up route
angular.module('tatoo').config(['$stateProvider',
	function($stateProvider) {
		// Tatoo state routing
		$stateProvider.
		state('timages', {
			url: '/images',
			templateUrl: 'modules/tatoo/views/images.client.view.html'
		});
	}
]);