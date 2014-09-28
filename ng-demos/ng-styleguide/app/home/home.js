'use strict';
angular.module('appstyleguide').controller('home', home)
home.$inject = ['homeService'];

function home(homeService) {

    var vm = {
        model: {},
    };

    init();

    return vm;

    function init() {

    }

}


