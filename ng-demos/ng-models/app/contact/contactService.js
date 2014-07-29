'use strict'

angular.module('ngmodels').factory('contactService', contactService);

contactService.$inject = ['ngResource'];

function contactService($resource) {
    return $resource(
        "/api/contact"
    );
}

