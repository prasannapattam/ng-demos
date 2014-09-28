'use strict'

angular.module('appstyleguide').factory('homeService', homeService);

homeService.$inject = ['$http'];

function homeService($http) {
    var model = {};

    var service = {
        model: model,
        fetch: fetch,
        save: save
    };

    return service;

    function fetch() {

    }

    function save() {

    }

}
