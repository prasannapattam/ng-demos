'use strict'

angular.module('bcd').factory('utility', utility);
utility.$inject = ['toastr', 'constants', 'moment'];

function utility(toastr, constants, moment) {

    var virtualDirectory = window.virtualDirectory || '';

    var vm = {
        virtualDirectory: virtualDirectory,
        showInfo: showInfo,
        showError: showError,
        imagePath: imagePath,
        iconPath: iconPath,
        routePath: routePath,
        getDefaultPatientPhoto: getDefaultPatientPhoto,
        getPhotoUrl: getPhotoUrl,
        lookupExists: lookupExists,
        lookupText: lookupText,
        getGridHeight: getGridHeight,
        dateDiff: dateDiff
    };

    return vm;

    function showInfo(message) {
        if (message !== null && message !== "")
            toastr.info(message);
    }

    function showError(message) {
        toastr.error(message);
    }

    function iconPath(filename) {
        return window.virtualDirectory + "/content/images/icons/" + filename;
    }

    function imagePath(filename) {
        return window.virtualDirectory + "/content/images/" + filename;
    }

    function routePath(path) {
        return window.virtualDirectory + "/" + path;
    }

    function getPhotoUrl(photoUrl) {
        if (photoUrl === null || photoUrl === "") {
            return window.virtualDirectory + "/Data/NoPhoto.jpg";
        }
        else {
            return window.virtualDirectory + "/Data/" + photoUrl + ".jpg";
        }

    }

    function getDefaultPatientPhoto(sex) {
        if(sex === constants.sex.male)
            return window.virtualDirectory + "/content/images/icons/patient-male.png";
        else
            return window.virtualDirectory + "/content/images/icons/patient-female.png";
    }

    function lookupExists(list, value) {
        for(var counter = 0; counter < list.length; counter ++){
            if (list[counter].FieldValue === value) {
                return true;
            }
        }

        return false;
    }

    function lookupText(list, value) {
        for (var counter = 0; counter < list.length; counter++) {
            if (list[counter].FieldDescription === value) {
                return list[counter].FieldValue;
            }
        }

        return null;
    }

    function getGridHeight(gridClass) {
        var contentOffset = angular.element(document.getElementsByClassName('main-content')).offset();
        var contentHeight = angular.element(document.getElementsByClassName('main-content')[0]).height();
        var gridOffset = angular.element(document.getElementsByClassName(gridClass)).offset();
        if (gridOffset !== undefined) {
            var gridHeight = contentHeight - (gridOffset.top - contentOffset.top) - 10;
            return gridHeight + 'px';
        }
    }

    function dateDiff(startdate, enddate) {

        //define moments for the startdate and enddate
        var startdateMoment = moment(startdate);
        var enddateMoment = moment(enddate);

        if (startdateMoment.isValid() === true && enddateMoment.isValid() === true) {

            //sending total weeks elapsed
            var weeks = enddateMoment.diff(startdateMoment, 'weeks');

            //getting the difference in years
            var years = enddateMoment.diff(startdateMoment, 'years');

            //moment returns the total months between the two dates, hence subtracting the years
            var months = enddateMoment.diff(startdateMoment, 'months') - (years * 12);

            //to calculate the days, first get the previous month and then subtract it from enddate
            startdateMoment.add(years, 'years').add(months, 'months');
            var days = enddateMoment.diff(startdateMoment, 'days')

            return { years: years, months: months, days: days, weeks: weeks };
        }
    }

};

