'use strict';

//Setting up route
angular.module('tattoo').config(['$stateProvider',

    function($stateProvider) {
        // Articles state routing
        $stateProvider.
//            state('listArticles', {
//                url: '/articles',
//                templateUrl: 'modules/tattoo/views/list-articles.client.view.html'
//            }).
            state('createTattoo', {
                url: '/tattoo/create',
                templateUrl: 'modules/tattoo/views/create-images.client.view.html'
            });
//            state('viewArticle', {
//                url: '/articles/:articleId',
//                templateUrl: 'modules/tattoo/views/view-article.client.view.html'
//            }).
//            state('editArticle', {
//                url: '/articles/:articleId/edit',
//                templateUrl: 'modules/tattoo/views/edit-article.client.view.html'
//            });


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
