'use strict'

angular.module('appmodels').factory('contactService', contactService);

contactService.$inject = ['$resource'];

function contactService($resource) {
    return $resource(
        "/api/contact"
    );
}

