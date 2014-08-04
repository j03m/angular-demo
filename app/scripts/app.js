'use strict';

/**
 * @ngdoc overview
 * @name angularDemoApp
 * @description
 * # angularDemoApp
 *
 * Main module of the application.
 */
angular
  .module('F1FeederApp', [

    //'ngAnimate',
    //'ngCookies',
    //'ngResource',
    //'ngSanitize',
    //'ngTouch',
    'F1FeederApp.services',
    'F1FeederApp.controllers',
    'ngRoute',

  ]).
  config(['$routeProvider', function($routeProvider) {
        $routeProvider.

            when('/drivers', {templateUrl: 'views/drivers.html', controller: 'driversController'}).
            when('/drivers/:id', {templateUrl: 'views/driver.html', controller: 'driverController'}).
            otherwise({redirectTo: '/drivers'});
  }]);
