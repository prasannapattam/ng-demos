'use strict';
angular.module('bcd').controller('user', user)
user.$inject = ['$window', '$scope', 'userService', 'utility', 'formUtility'];

function user($window, $scope, userService, utility, formUtility) {

    var vm = {
        model: [],
        selectedUser: {},
        showDetail: false,
        listHeight: '0px',
        getPhotoUrl: utility.getPhotoUrl,
        selectUser: selectUser,
        validateRequiedField: validateRequiedField,
        saveUser: saveUser,
        hidePasswords: hidePasswords,
        cancel: cancel,
        changeFile: changeFile
}

    init();

    return vm;

    function init(){
        vm.model = userService.model;
        resetUserSelection();
        resizeUserList();
        vm.showDetail = false;

        angular.element($window).bind('resize', function () {
            resizeUserList();
            $scope.$apply('vm.listHeight');
        });
        $scope.$on('$destroy', function (e) {
            angular.element($window).unbind('resize');
        });


    }

    function changeFile(element) {
        if (element.files.length > 0){
            vm.selectedUser.photo = element.files[0];
            var reader = new FileReader();

            reader.onload = function (evt) {
                $('#userPhoto').attr('src', evt.target.result);
            };
            reader.readAsDataURL(vm.selectedUser.photo);
        }
        else
            vm.selectedUser.photo = undefined;
    }

    function resizeUserList() {
        vm.listHeight = utility.getGridHeight('user-list');
    }

    function resetUserSelection() {
        for (var counter = 0; counter < vm.model.length; counter++) {
            vm.model[counter].selected = false;
        }
    }

    function selectUser(item) {
        resetUserSelection();
        item.selected = true;
        vm.selectedUser = item;
        vm.selectedUser.photo = undefined;
        vm.showDetail = true;
    }

    function validateRequiedField(fieldValue, fieldName) {
        return formUtility.requiredValidation(fieldValue, fieldName + " is required")
    }


    function saveUser(data) {
        var user = angular.extend({}, vm.selectedUser, data, { supressToastr: true });

        //verifying password
        if (data.Password !== data.ConfirmPassword) {
            $scope.userForm.$setError('ConfirmPassword', 'Password and Confirm Password didn\'t match');
            return "Error";
        }

        return userService.save(user)
                .then(function (result) {
                    vm.selectedUser.FullName = user.FirstName + ' ' + user.LastName;
                    if (user.photo !== undefined) {
                        vm.selectedUser.PhotoUrl = user.UserName;
                        vm.selectedUser.FullPhotoUrl = utility.getPhotoUrl(vm.selectedUser.PhotoUrl);
                        vm.selectedUser.FullPhotoUrl = vm.selectedUser.FullPhotoUrl + '?' + new Date().getTime();
                        $('#userPhotoInput').val(null);
                    }
                    return result;
                },
                function (message) {
                    $scope.userForm.$setError('UserName', message);
                    return message;
                });
    }

    function hidePasswords() {
        vm.selectedUser.Password = '';
        vm.selectedUser.ConfirmPassword = '';
    }

    function cancel(evt) {
        formUtility.cancelForm(evt).then(function () {
            $scope.userForm.$cancel()
            $('#userPhotoInput').val(null);
            vm.selectedUser.FullPhotoUrl = vm.selectedUser.FullPhotoUrl + '?' + new Date().getTime();
        });
    }

}