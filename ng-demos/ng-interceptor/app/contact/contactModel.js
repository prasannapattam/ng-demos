'use strict'

angular.module('appinterceptors').value("contactModel", contactModel());

function contactModel() {
    return {
        ContactID: 21,
        FirstName: 'Praval',
        LastName: 'Pattam'
    };
}


