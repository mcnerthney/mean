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


	}
]);