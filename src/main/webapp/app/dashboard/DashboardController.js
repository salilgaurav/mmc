define([
	'angular',
	'pikaday'

], function (
	ng,
	pikaday
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
                var today = new Date(),
                    h = checkTime(today.getHours()),
                    m = checkTime(today.getMinutes()),
                    s = checkTime(today.getSeconds());
                document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
                var t = setTimeout(function () {
                    startTime()
                }, 500);
            }
            startTime();
        })();

	}];
});