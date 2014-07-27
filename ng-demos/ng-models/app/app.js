'use strict';

var app = angular.module('ngVSTemplateApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {

    $routeProvider
        .when("/home", {
                controller: "home",
                templateUrl: "/app/components/home/home.html"
            })
        .when("/contact", {
            controller: "contact",
            templateUrl: "/app/components/contact/contact.html"
        })
        .otherwise({ redirectTo: "/home" });
    $locationProvider.html5Mode(true);
});