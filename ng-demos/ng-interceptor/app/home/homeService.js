'use strict'

angular.module('appinterceptors').factory('homeService', homeService);

homeService.$inject = ['$resource'];

function homeService($resource) {
    return $resource(
        "/api/Contact"
    );
}

