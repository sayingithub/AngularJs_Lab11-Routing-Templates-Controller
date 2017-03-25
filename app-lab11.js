/**
 * Created by Niyas on 12/12/2016.
 */

// Include all dependencies required for your app in the array
// Here we want to use the SPA, for which we need Route service.
var angularApp = angular.module('angularApp', ['ngRoute']);


// configure the routing part for Single Page Application
angularApp.config(function($routeProvider){

    $routeProvider

        .when('/main',{
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })

        .when('/second',{
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })

        // If we want to pass the query string SPA
        .when('/third/:num',{
            templateUrl: 'pages/third.html',
            controller: 'thirdController'
        })


});


angularApp.controller('mainController', ['$scope','$location','$log',function ($scope, $location, $log) {

    $log.info("This is for information from mainController");
    $log.info($location.path()); // returns the string after the # tag

    $scope.name = "Main";

    // to Proof AngularJS services are singletons.
    // AngularJS will create a singleton $log object and all the controllers will have the same copy
    // the $log.main will be overwrite when calling secondController, thirdController
    $log.main = "Property from main";
    $log.first = "Property from MAIN";
    $log.log($log);

}]);


angularApp.controller('secondController', ['$scope','$location','$log','$routeParams',function ($scope, $location, $log) {

    $log.info("This is for information from secondController");
    $log.info($location.path()); // returns the string after the # tag

    $scope.name = "Second";

    // to Proof AngularJS services are singletons.
    // AngularJS will create a singleton $log object and all the controllers will have the same copy
    $log.main = "Property from second";
    $log.second = "Property from SECOND";
    $log.log($log);


}]);

angularApp.controller('thirdController', ['$scope','$location','$log','$routeParams',function ($scope, $location, $log, $routeParams) {

    $log.info("This is for information from thirdController");
    $log.info($location.path()); // returns the string after the # tag

    $scope.name = "Third";
    $scope.num = $routeParams.num;


    // to Proof AngularJS services are singletons.
    // AngularJS will create a singleton $log object and all the controllers will have the same copy
    $log.main = "Property from third";
    $log.third = "Property from THIRD";
    $log.log($log);

}]);