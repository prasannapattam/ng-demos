'use strict'

angular.module('appinterceptors').factory('contactService', contactService);

contactService.$inject = ['$resource'];

function contactService($resource) {
    return $resource(
        "/api/contact"
    );
}

