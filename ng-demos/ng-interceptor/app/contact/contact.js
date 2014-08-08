'use strict';

angular.module('appinterceptors').controller('contact', contact);
contact.$inject = ['contactService'];

function contact(contactService) {

    var vm = {
        model: {},
        init: init,
        save: save
    };

    init();

    return vm;

    function init() {
        vm.model = contactService.model;
    }

    function save() {
        contactService.save().success(function () {
            alert('Saved');
        });
    }
}

