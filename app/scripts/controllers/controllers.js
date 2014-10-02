'use strict';

/**
 * @ngdoc function
 * @name angularDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularDemoApp
 */
angular.module('F1FeederApp.controllers', []).
    controller('driversController', function($scope, ergastAPIservice) {
        console.log('drivers - app');
        $scope.driversList = [];
        ergastAPIservice.getDrivers().success(function (response) {
            //sssDig into the responde to get the relevant dat
            $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        });

    }).


    /* Driver controller */
    controller('driverController', function($scope, $routeParams, ergastAPIservice) {
        console.log('driver');
        $scope.id = $routeParams.id;
        $scope.races = [];

        $scope.driver = null;



        ergastAPIservice.getDriverDetails($scope.id).success(function (response) {
            $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];

        });

        ergastAPIservice.getDriverRaces($scope.id).success(function (response) {
            //sd

            //

            $scope.races = response.MRData.RaceTable.Races;
        });
    });

