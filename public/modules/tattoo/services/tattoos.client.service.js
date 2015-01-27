'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('tattoo').factory('Tattoos', ['$resource',
	function($resource) {
		return $resource('tattoos/:tattooId', {
			tattooId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);