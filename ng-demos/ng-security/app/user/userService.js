'use strict'

angular.module('bcd').factory('userService', userService);

userService.$inject = ['$http', 'utility'];

function userService($http, utility) {

    var service = {
        model: [],
        fetch: fetch,
        save: save
    };

    return service;

    function fetch() {
        return $http.get("/api/user")
            .success(function (data) {
                service.model = data;
                //setting the photo url
                angular.forEach(data, function (item, index) {
                    item.FullPhotoUrl = utility.getPhotoUrl(item.PhotoUrl);
                });
            });
    }

    function save(user) {
        return $http.post("/api/user", getPostData(user), { headers: { 'Content-Type': undefined }, transformRequest: angular.identity });
    }

    function getPostData(data) {
        var formData = new FormData();
        angular.forEach(data, function (value, key) {
            if (key !== "photo") {
                formData.append(key, value);
            }
        });
        if (data.photo !== undefined) {
            formData.append("file", data.photo);
        }
        return formData;
    }

}

//$scope.image_url = url + '#' + new Date().getTime();