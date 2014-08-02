'use strict';

angular.module('appinterceptors').config(appConfig);
routeConfig.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];

function appConfig($routeProvider, $locationProvider, $provide, $httpProvider) {

    //routing
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

    // Add the interceptor to the $httpProvider.
    $httpProvider.interceptors.push('WebAPIInterceptor');

}

