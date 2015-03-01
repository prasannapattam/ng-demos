'use strict'

angular.module('bcd').factory('formUtility', formUtility);
formUtility.$inject = ['$mdDialog'];

function formUtility($mdDialog) {
    var vm = {
        requiredValidation: requiredValidation,
        cancelForm: cancelForm
    };

    return vm;

    function requiredValidation(attr, message) {
        if (attr === null || attr.trim() === '') {
            return message;
        }

        return true;
    }

    function cancelForm(evt, form) {
        var confirm = $mdDialog.confirm()
          .title('Do you want to cancel and loose your changes?')
          .content('Clicking yes will loose your changes')
          .ariaLabel('Cancel modal window')
          .ok('Yes')
          .cancel('No')
          .targetEvent(evt)

        if (form !== undefined) {
            $mdDialog.show(confirm).then(function () {
                form.$cancel()
            }, function () {
                //do nothing
            });
        }
        else {
            return $mdDialog.show(confirm);
        }
    }


}