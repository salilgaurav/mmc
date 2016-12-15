define([
	'angular'

], function (
	ng
) {
	'use strict';
	return [ '$scope' , '$location', '$stateParams', 'albumService' ,
	function ( $scope ,  $location ,  $stateParams , albumService ) {


	        var getSuccess = function( data ) {
	            console.log(data);
	            $scope.images = data;
	        };

            var getError = function( data ) {
                console.log(data);
            };

            albumService.getAlbum( $stateParams.id ).success( getSuccess ).error( getError );


            var uploadSuccess = function( data ){
                console.log(data);
                albumService.getAlbum( $stateParams.id ).success( getSuccess ).error( getError );
            };

            var uploadError = function( data ){
                console.log(data);
            };
            $scope.uploadFile = function() {
            				var file = $scope.myFile;
            				var name = 'Salil';
            				var albumId = $stateParams.id;
            				var date = '1990-11-20';
            				console.log('file is ' + JSON.stringify(file));
            				albumService.upload( file, name, albumId , date).success( uploadSuccess ).error( uploadError );
            };
	}];
});