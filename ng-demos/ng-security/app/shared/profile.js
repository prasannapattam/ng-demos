'use strict'

angular.module('bcd').factory('profile', profile);
profile.$inject = ['utility'];

function profile(utility) {
    var userID = 1;
    var firstName = 'Prasanna';
    var lastName = 'Pattam';
    var userName = 'koty';
    var photoUrl = window.virtualDirectory + '/data/prasanna.jpg';
    var isAuthenticated = window.userAuthenticated;


    var vm = {
        userID: userID,
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        photoUrl: photoUrl,
        isAuthenticated: isAuthenticated,
        populate: populate,
        logout: logout
    };

    return vm;

    function populate(data) {
        vm.userID = data.UserID;
        vm.firstName = data.FirstName;
        vm.lastName = data.LastName;
        vm.userName = data.UserName;
        vm.photoUrl = utility.getPhotoUrl(data.PhotoUrl);
        vm.isAuthenticated = true;
    };

    function logout() {
        this.isAuthenticated = false;
    };
};

