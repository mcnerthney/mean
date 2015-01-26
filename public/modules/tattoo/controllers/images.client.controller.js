'use strict';

angular.module('tattoo').controller('ImagesController', ['$scope',
	function($scope) {
		// Controller Logic
        $scope.mImage='';
        $scope.mFlow = { };
        $scope.imageUpload = function() {
            $scope.mFlow.flow.upload();
        };
    }
]);