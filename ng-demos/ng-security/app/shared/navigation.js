'use strict';
angular.module('bcd').factory('navigation', navigation)
navigation.$inject = ['$state', 'utility', 'constants'];

function navigation($state, utility, constants) {

    var tab = function (tabs, title, icon, stateName, params, parentStateName) {
        var self = this;

        self.tabs = tabs;
        self.title = title;
        self.firstTab = tabs.length == 0;
        self.active = true;
        self.iconUrl = utility.iconPath(icon);
        self.stateName = stateName;
        self.parentStateName = parentStateName;
        self.params = params;
        self.hash = $state.href(stateName, params);
        self.parentHash = $state.href(parentStateName, params);

        if (tabs.length > 3) {
            tabs.splice(1, 1);
        }
    };

    var tabs = [];

    var vm = {
        hideHeader: false,
        appTitle: 'Prasanna Kumar',
        isLoading: true,
        tabs: tabs,
        iconTypes: constants.iconTypes,
        activateTab: activateTab,
        removeTab: removeTab,
        addTab: addTab,
        gotoPatient: gotoPatient,
        addOrActivateTab: addOrActivateTab,
        setLeftMenu: setLeftMenu
    };

    init();

    return vm;

    function init() {
        addTab('Dashboard', constants.iconTypes.dashboard, 'dashboard', {})
    }

    function activateTab(tab) {
        if (!tab.active) {
            var tabs = tab.tabs;
            for (index = 0; index < tabs.length; index++) {
                tabs[index].active = false;
            }
            tab.active = true;

            $state.go(tab.stateName, tab.params);
        }
    };

    function removeTab(tab) {
        var tabs = tab.tabs;
        if (tab.active) {
            for (index = 0; index < tabs.length; index++) {
                if (tabs[index].active) {
                    activateTab(tab.tabs[index - 1]);
                    break;
                }
            }
        }

        var index = tabs.indexOf(tab);
        tabs.splice(index, 1);
    };

    function addTab(title, icon, stateName, params, parentStateName) {
        //checking if the tab is already present 
        if (!checkAndActivateTab(stateName, params, parentStateName))
            vm.tabs.push(new tab(vm.tabs, title, icon, stateName, params, parentStateName))
    }

    function gotoPatient(patientId, patientName) {
        vm.addTab(patientName, constants.iconTypes.patient, 'patient.portal', { patientid: patientId }, 'patient');
        $state.go("patient.portal", { patientid: patientId, patientName: patientName })
    }

    function addOrActivateTab(state, params) {
        if (!checkAndActivateTab(state.name, params, state.parentStateName) && state.icon !== "") {
            vm.tabs.push(new tab(vm.tabs, state.title, state.icon, state.name, params, state.parentStateName))
        }
    }

    function checkAndActivateTab(stateName, params, parentStateName) {
        var tabexists = false;
        var hash = $state.href(stateName, params);
        var parentHash = $state.href(parentStateName, params)
        for (index = 0; index < vm.tabs.length; index++) {
            if (vm.tabs[index].hash === hash || vm.tabs[index].parentHash === parentHash) {
                vm.tabs[index].active = true;
                vm.tabs[index].stateName = stateName;
                vm.tabs[index].params = params;
                vm.tabs[index].hash = hash;
                tabexists = true;
            }
            else {
                vm.tabs[index].active = false;
            }
        }

        return tabexists;
    }

    function setLeftMenu() {
        //setting the left-menu, if it exists
        var leftmenu = document.getElementById('left-menu');
        if (leftmenu !== null && leftmenu !== undefined) {
            var hash = $state.href($state.current.name, $state.params);
            var menuItem = $("a[href$='" + hash + "']", leftmenu).parent();
            $(menuItem).siblings().removeClass("k-state-highlight");
            $(menuItem).addClass("k-state-highlight");
        }
    }
}


