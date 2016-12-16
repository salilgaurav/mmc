define([
	'angular',
	'pikaday',
	'moment'

], function (
	ng,
	pikaday,
	moment
) {
	'use strict';
	return [ '$scope' , '$location',
	function ( $scope ,  $location ) {

        function init_pikaday(){
            return new pikaday({
            		field: document.getElementById('date-picker'),
            		bound: false,
                    container: document.getElementById('date-picker-container')
            });
        }
        init_pikaday();

        (function () {
            function checkTime(i) {
                return (i < 10) ? "0" + i : i;
            }

            function startTime() {
                var today = new moment(),
                    h = checkTime(today.hours()),
                    m = checkTime(today.minutes()),
                    s = checkTime(today.seconds());
                document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
                var t = setTimeout(function () {
                    startTime();
                }, 500);
            }
            startTime();
        })();

	}];
});