'use strict';

angular
    .module('datepickerApp', [
        'ngMaterial',
        'ngMessages',
        'am.date-picker',
    ])
    .config(function($mdThemingProvider, amDatePickerConfigProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('teal');
        amDatePickerConfigProvider.setOptions({
            popupDateFormat: 'Do of MMMM',
            calendarIcon: '../dist/images/icons/ic_today_24px.svg',
            clearIcon: '../dist/images/icons/ic_close_24px.svg',
            nextIcon: '../dist/images/icons/ic_chevron_right_18px.svg',
            prevIcon: '../dist/images/icons/ic_chevron_left_18px.svg'
        });
    })
    .controller('MainCtrl', ['$scope',
        function ($scope) {
            var today = new Date();
            $scope.to = new Date(today.setDate(today.getDate() + 1));
            $scope.from = new Date('2015-11-05');
            $scope.onChange = function(date) {
                console.log('date was changed to %s', date);
            };
            $scope.change = function() {
                $scope.date = new Date('2015-10-05');
            };
        }
    ]);
