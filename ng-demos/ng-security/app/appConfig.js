'use strict';

angular.module('bcd').config(appConfig);
appConfig.$inject = ['$httpProvider'];


function appConfig($httpProvider) {

    // Add the interceptor to the $httpProvider.
    $httpProvider.interceptors.push('webapiInterceptor');

}

angular.module('bcd').run(appRun);
appRun.$inject = ['session'];
function appRun(session) {
    session.initialize();
}


//global variables
angular.module('bcd').value('toastr', toastr)
angular.module('bcd').value('moment', moment)


