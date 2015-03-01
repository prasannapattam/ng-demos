angular.module('bcd').filter('blankValue', blankValue);

function blankValue() {
    return function (value) {
        if (value === null || value === "")
            return '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0';
        else
            return value;
    }
}