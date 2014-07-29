'use strict'

angular.module('ngmodels').value("contactModel", contactModel());

function contactModel() {
    return {
        ContactID: 21,
        FirstName: 'Praval',
        LastName: 'Pattam'
    };
}


