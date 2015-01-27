'use strict';

//Setting up route
angular.module('tattoo').config(['$stateProvider',

    function($stateProvider) {
        // Articles state routing
        $stateProvider.
            state('listTattoos', {
                url: '/tattoos',
               templateUrl: 'modules/tattoo/views/list-tattoo.client.view.html'
            }).
            state('createTattoo', {
                url: '/tattoos/create',
                templateUrl: 'modules/tattoo/views/create-tattoo.client.view.html'
            }).
            state('viewTattoo', {
                url: '/tattoos/:tattooId',
                templateUrl: 'modules/tattoo/views/view-tattoo.client.view.html'
            }).
            state('editTattoo', {
                url: '/tattoos/:tattooId/edit',
                templateUrl: 'modules/tattoo/views/edit-tattoo.client.view.html'
            });


	}])
    .config(['flowFactoryProvider', function (flowFactoryProvider) {


        flowFactoryProvider.defaults = {
            target: '/upload',
            testChunks:false,
            singleFile: false,
            generateUniqueIdentifier: function generateGuid (file) {
                function s4() {
                    return Math.floor((1 + Math.random()) * 0x10000)
                        .toString(16)
                        .substring(1);
                }
                 return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                        s4() + '-' + s4() + s4() + s4();

            }};


        flowFactoryProvider.on('catchAll', function (event) {
            console.log('catchAll', arguments);
        });
    }]);
