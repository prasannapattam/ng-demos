'use strict';
angular.module('bcd').controller('dashboard', dashboard)
dashboard.$inject = ['dashboardService'];

function dashboard(dashboardService) {

    var vm = {
        hello: "Hi How are you"
    };

    init();

    return vm;

    function init() {
        //page initialization code goes here
    }

}
