'use strict';

angular.module('ngVSTemplateApp').config(routeConfig);
routeConfig.$inject = ['$routeProvider', '$locationProvider'];

function routeConfig($routeProvider, $locationProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "/app/home/home.html",
            controller: "home",
            controllerAs: "vm"
        })
        .when("/contact", {
            templateUrl: "/app/contact/contact.html",
            controller: "contact",
            controllerAs: "vm"
        })
        .otherwise({ redirectTo: "/home" });
    $locationProvider.html5Mode(true);
}

