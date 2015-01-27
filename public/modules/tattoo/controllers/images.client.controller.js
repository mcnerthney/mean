'use strict';

angular.module('tattoo').controller('tattooController', ['$scope', '$stateParams', '$location', 'Authentication', 'Tattoos',
    function($scope, $stateParams, $location, Authentication, Tattoos) {
        $scope.authentication = Authentication;

        $scope.create = function() {
            var tattoo = new Tattoos({
                title: this.title,
                content: this.content,
                cost: this.cost,
                image: this.mImage
            });
            tattoo.$save(function(response) {
                $location.path('tattoos/' + response._id);

                $scope.title = '';
                $scope.content = '';
                $scope.cost = '';
                $scope.image = '';
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.remove = function(tattoo) {
            if (tattoo) {
                tattoo.$remove();

                for (var i in $scope.tattoos) {
                    if ($scope.tattoos[i] === tattoo) {
                        $scope.tattoos.splice(i, 1);
                    }
                }
            } else {
                $scope.tattoo.$remove(function() {
                    $location.path('tattoos');
                });
            }
        };

        $scope.update = function() {
            var tattoo = $scope.tattoo;

            tattoo.$update(function() {
                $location.path('tattoos/' + tattoo._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.find = function() {
            $scope.tattoos = Tattoos.query();
        };

        $scope.findOne = function() {
            $scope.tattoos = Tattoos.get({
                tattooIf: $stateParams.tattooId
            });
        };

        $scope.mImage='';
        $scope.mFlow = { };
        $scope.imageUpload = function() {
            $scope.mFlow.flow.upload();
        };


    }
]);