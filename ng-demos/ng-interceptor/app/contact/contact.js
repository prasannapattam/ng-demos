'use strict';

angular.module('appinterceptors').controller('contact', contact);
contact.$inject = ['contactService'];

function contact(contactService) {

    var vm = {
        model: {},
        save: save
    };

    initialize();

    return vm;

    function initialize() {
        contactService.fetch().success(function (data) {
            console.log(data);
        })
        .error(function (data, status, headers, config) {
            console.log(data);
        });
        vm.model = contactService.model;
    }

    function save() {
        contactService.save(vm.model);
        alert('Saved');
    }
}

