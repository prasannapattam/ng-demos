'use strict'

angular.module('ngmodels').factory('contactService', contactService);

contactService.$inject = ['$resource'];

function contactService($resource) {
    return $resource(
        "/api/contact"
    );
}

