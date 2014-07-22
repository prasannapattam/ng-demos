'use strict';

var app = angular.module('AngularKendoBootstrapApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {

    $routeProvider
        .when("/home", {
                controller: "home",
                templateUrl: "/app/pages/home/home.html"
            })
        .when("/contact", {
            controller: "contact",
            templateUrl: "/app/pages/contact/contact.html"
        })
        .otherwise({ redirectTo: "/home" });
    $locationProvider.html5Mode(true);
});