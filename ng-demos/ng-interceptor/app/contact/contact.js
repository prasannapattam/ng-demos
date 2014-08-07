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
        return contactService.fetch().success(function (data) {
            console.log(data);
            vm.model = contactService.model;
        })
        .error(function (data, status, headers, config) {
            console.log(data);
        });
    }

    function save() {
        contactService.save().success(function () {
            alert('Saved');
        });
    }
}

