'use strict'

angular.module('appmodels').value("contactModel", contactModel());

function contactModel() {
    return {
        ContactID: 21,
        FirstName: 'Praval',
        LastName: 'Pattam'
    };
}


