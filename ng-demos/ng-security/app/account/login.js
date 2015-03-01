'use strict';

angular.module('bcd').controller('login', login);
login.$inject = ['$state', 'accountService', 'profile'];

function login($state, accountService, profile) {

    var vm = {
        model: {},
        init: init,
        userNameFocus: true,
        submitted: false,
        validate: validate,
        isFormSubmitted: isFormSubmitted
    };

    init();

    return vm;

    function init() {
        profile.logout();
        vm.model = accountService.model;
    }

    function validate(form) {
        vm.submitted = true;
        if (form.$valid)
        {
            accountService.validate(vm.model).success(function () {
                $state.go('dashboard');
            });
        }
    }

    function isFormSubmitted(field) {
        return vm.submitted || field.$dirty;
    };

}

