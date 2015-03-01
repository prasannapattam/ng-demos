'use strict'

angular.module('bcd').constant('constants', constants());

function constants() {

    var notesType = {
                        New: 1,
                        Correct: 2,
                        Saved: 3,
                        Default: 4
                    };

    var module = {
                    patient: 'patient',
                    user: 'user'
                };

    var colourType = {
                        Normal: 0,
                        New: 1,
                        Correct: 2
                    };

    var notesSaveType = {
                            Save: 1,
                            SignOff: 2,
                            Correct: 3
                        };

    var fieldType = {
                        Notes: 0,
                        Patient: 1,
                        Default: 2
                    };

    var sex = {
        male: "Male",
        female: "Female"
    }

    var iconTypes = {
        dashboard: "dashboard.png",
        patient: "patient.png",
        printQueue: "printer.png",
        user: "users.png"
    }



    var service = {
        notesType: notesType,
        module: module,
        colourType: colourType,
        notesSaveType: notesSaveType,
        fieldType: fieldType,
        iconTypes: iconTypes,
        sex: sex
    };

    return service;

}