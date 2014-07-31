'use strict';

angular.module('appmodels').controller('contact', contact);
contact.$inject = ['contactService'];

function contact(contactService) {

    var vm = {
        model: {},
        save: save
    };

    initialize();

    return vm;

    function initialize() {
        vm.model = contactService.get();
    }

    function save() {
        contactService.save(vm.model);
        alert('Saved');
    }

}

