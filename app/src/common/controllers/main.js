(function(){
    'use strict';

    angular.module('ngFundApp')
    .controller("ngFundAppController", function($scope, $http){
        $scope.content = null;
        $http({
            method : 'GET',
            url    : 'src/data/fund.json'
        })
        .success(function(data, status, headers, config){
            $scope.contents = data;
        })
        .error(function(data, status, headers, config) {});
    });//End of controller

}());
