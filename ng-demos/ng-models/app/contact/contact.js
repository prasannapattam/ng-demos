'use strict';

angular.module('ngmodels').controller('contact', contact);

contact.$inject = ['contactService'];

function contact(contactService) {
    var vm = {
        model: {},
        save: save
    };


    return vm;
    initialize();

    function initialize() {
        vm.model = contactService.get();
    }

    function save() {
        alert('sayHi');
    }

}

