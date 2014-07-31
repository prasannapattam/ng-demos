'use strict';
angular.module('appmodels').controller('home', home)
home.$inject = ['homeService'];

function home(homeService) {

    var vm = {
        model: {},
    };

    initialize();

    return vm;

    function initialize() {

    }

}


