define([
	'angular'

], function (
	ng
) {
	'use strict';
	return [ '$scope' , '$location' , 'loginService',
	function ( $scope ,  $location , loginService) {

	    $scope.loginData = {
	        email: '',
	        password: ''
	    };

        var successCallback = function( data ) {
            if( data.status ) {
               $scope.errorMsg = data.status.statusMsg;
            } else {
                $location.path('/dashboard/member');
            }
        };

        var errorCallback = function( data ) {
            console.log(data);
        };

	    $scope.login = function() {
            loginService.login($scope.loginData).success( successCallback ).error( errorCallback );
	    };

	}];
});