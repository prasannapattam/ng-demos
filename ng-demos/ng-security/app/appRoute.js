'use strict';

angular.module('bcd').config(appRoute);
appRoute.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', 'constants'];

function appRoute($stateProvider, $urlRouterProvider, $locationProvider, constants) {

    $stateProvider
        .state("dashboard", {
            url: window.virtualDirectory,
            title: "Dashboard",
            templateUrl: window.virtualDirectory + "/app/dashboard/dashboard.html",
            controller: "dashboard",
            controllerAs: "vm",
            resolve: ['dashboardService', function (dashboardService) {
                return dashboardService.resolve();
            }]
        })

    $locationProvider.html5Mode(true);

    $urlRouterProvider.when('', '/')
    $urlRouterProvider.when(window.virtualDirectory + '/', window.virtualDirectory);

}
