'use strict';
angular.module('bcd').directive('sectionHeader', sectionHeader)
sectionHeader.$inject = [];

function sectionHeader() {
    return {
        restrict: 'A',
        scope: {
            text: '@',
            cssClass: '@'
        },
        template: '<div class="ui-grid  border-bottom-none {{cssClass}}">' +
                        '<div class="ui-grid-header ui-grid-top-panel ui-grid-cell-contents">' +
                            '{{text}}' +
                        '</div>' +
                    '</div>'
    };
}