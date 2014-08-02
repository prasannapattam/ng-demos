angular.module('appinterceptors').factory('WebAPIInterceptor', WebAPIInterceptor);
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
        console.log(config); 

        // Return the config or promise.
        return config || $q.when(config);
    }

    //request error
    function requestError(rejection) {
        console.log(rejection); 

        // Return the promise rejection.
        return $q.reject(rejection);
    }

    // response success
    function response(response) {
        console.log(response);

        // Return the response or promise.
        return response || $q.when(response);
    }

    //response Error
    function responseError(rejection) {
        console.log(rejection); // Contains the data about the error.

        // Return the promise rejection.
        return $q.reject(rejection);
    }
}


