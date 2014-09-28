'use strict';
angular.module('appstyleguide').factory('WebAPIInterceptor', WebAPIInterceptor);
WebAPIInterceptor.$inject = ['$q'];

function WebAPIInterceptor($q) {

    return {
        request: request,
        requestError: requestError,
        response: response,
        responseError: responseError
    };

    //request success
    function request(config) {

        // Return the config or promise.
        return config || $q.when(config);
    }

    //request error
    function requestError(rejection) {

        // Return the promise rejection.
        return $q.reject(rejection);
    }

    // response success
    function response(response) {
        //checking whether we got our AjaxModel
        if (response.data.hasOwnProperty("Success") && response.data.hasOwnProperty("Message") && response.data.hasOwnProperty("Model")) {
            if (response.data.Success === false) {
                //as needed show error message to the user
                //reject the response
                return $q.reject(response);
            }
            else {
                response.data = response.data.Model;
            }
        }

        // Return the response or promise.
        return response || $q.when(response);
    }

    //response Error
    function responseError(rejection) {
        // Return the promise rejection.
        return $q.reject(rejection);
    }
}


