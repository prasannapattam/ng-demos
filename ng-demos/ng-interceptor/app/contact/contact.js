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
        try{
            vm.model = contactService.get();
        }
        catch (exp) {
            console.log(exp);
        }
    }

    function save() {
        contactService.save(vm.model);
        alert('Saved');
    }
}

