define([
	'angular',
	'flatpickr'
], function (
	ng,
	flatpickr
) {
	'use strict';
	return [ '$scope' , '$location', 'eventService' ,
	function ( $scope ,  $location , eventService ) {


        $scope.add = function() {

            eventService.add( $scope.event ).success( addSuccess ).error( addError );
        };

        var addSuccess = function( data ){
            alert(data.statusMsg);
        };

        var addError = function( data ){


        };

        document.getElementById("start").flatpickr( {
            enableTime: true
        });

         document.getElementById("end").flatpickr( {
            enableTime: true
         });

	}];
});