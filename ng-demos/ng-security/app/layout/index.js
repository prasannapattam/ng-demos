'use strict';
angular.module('bcd').controller('index', index)
index.$inject = ['$http', 'profile', 'navigation', 'utility', '$scope'];

function index($http, profile, navigation, utility, $scope) {

    var menuItems = [
                        {
                            text: "Menu", url: "#",
                            items: [
                                { text: "Dashboard", url: utility.routePath("") },
                                { text: "Users", url: utility.routePath("user") },
                                { text: "Configuation", url: utility.routePath("configuration") },
                                { text: "Logout", url: utility.routePath("login") },
                            ]
                        }
                    ];

    var searchCriteria;
    var searchOptions = {
        dataSource: new kendo.data.DataSource({
            transport: {
                read: function (options) {
                    $http.post("/api/patientsearch", "'" + options.data.filter.filters[0].value + "'")
                        .success(function (data) {
                            options.success(data)
                        })
                        .error(function (data) {
                            options.success(data.Model);
                        });
                }
            },
            serverFiltering: true
        }),
        dataTextField: "PatientName"
    };

    var vm = {
        menuItems: menuItems,
        profile: profile,
        navigation: navigation,
        menuSelect: menuSelect,
        searchCriteria: searchCriteria,
        searchOptions: searchOptions,
        searchSelect: searchSelect
    };

    init();

    angular.extend(this, vm);

    function init() {

    }

    function menuSelect(e) {
        var menu = $("#main-menu").data("kendoMenu");
        menu.close("#main-menu");
    }

    function searchSelect(e) {
        var patient = e.sender.dataItems()[e.item.index()];
        vm.searchCriteria = '';

        navigation.gotoPatient(patient.ID, patient.PatientName);
    }
}


