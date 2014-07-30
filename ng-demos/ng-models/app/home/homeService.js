'use strict'

angular.module('ngmodels').factory('homeService', homeService);

homeService.$inject = ['$resource'];

function homeService($resource) {
    return $resource(
        "/api"
    );
}

