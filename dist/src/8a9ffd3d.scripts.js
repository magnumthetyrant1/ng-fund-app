"use strict";angular.module("ngFundApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(function($routeProvider){$routeProvider.when("/",{templateUrl:"src/common/views/main.html",controller:"ngFundAppController"}).otherwise({redirectTo:"/404.html",templateUrl:"src/common/views/404.html"})}),function(){angular.module("ngFundApp").controller("ngFundAppController",function($scope,$http){$scope.content=null,$http({method:"GET",url:"src/data/fund.json"}).success(function(data,status,headers,config){$scope.contents=data}).error(function(data,status,headers,config){})})}();