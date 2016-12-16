define([
	'angular'

], function (
	ng
) {
	'use strict';
	return [ '$scope' , '$location', '$stateParams' , 'eventService' ,
	function ( $scope ,  $location ,  $stateParams ,eventService ) {


            var getEventSuccess = function( data ) {

                $scope.event = data;
                $scope.eventClone = ng.copy( $scope.event );
            };

            var getEventError = function( data ) {

            };

            eventService.get( $stateParams.id ).success( getEventSuccess ).error( getEventError );

            $scope.save = function(){

                    eventService.update( $scope.eventClone ).success( saveSuccess ).error( saveError );
            };

            var saveSuccess = function( data ){
                 alert(data.statusMsg);
                 $scope.event = ng.copy( $scope.eventClone );
            };

            var saveError = function( data ){

            };

            $scope.reset = function(){
                $scope.eventClone = ng.copy( $scope.event );
            };

	}];
});