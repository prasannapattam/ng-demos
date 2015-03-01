'use strict'

angular.module('bcd').factory('accountService', accountService);

accountService.$inject = ['$http', 'profile'];

function accountService($http, profile) {
    var model = {
        UserName: '',
        UserPassword: ''
    };

    var service = {
        model: model,
        validate: validate
    };

    return service;

    function validate(model) {
        return $http.post("/api/login", model)
            .success(function (data) {
                profile.populate(data);
            });
    }

}
