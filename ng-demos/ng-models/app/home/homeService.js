'use strict'

angular.module('appmodels').factory('homeService', homeService);

homeService.$inject = ['$resource'];

function homeService($resource) {
    return $resource(
        "/api"
    );
}

