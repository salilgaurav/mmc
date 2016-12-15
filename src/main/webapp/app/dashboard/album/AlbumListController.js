define([
	'angular'

], function (
	ng
) {
	'use strict';
	return [ '$scope' , '$location', 'albumService' ,
	function ( $scope ,  $location , albumService ) {


	        var getSuccess = function( data ) {
	            console.log(data);
	            $scope.albums = data;
	        };

            var getError = function( data ) {
                console.log(data);
            };

            albumService.get().success( getSuccess ).error( getError );

            $scope.addAlbum = function(){
                $scope.album = {
                    albumId: null,
                    albumName: 'Album 1'
                };
                albumService.add($scope.album).success( addSuccess ).error( addError );
            };

            var addSuccess = function( data ) {
                console.log(data);
                albumService.get().success( getSuccess ).error( getError );
            };

            var addError = function( data ) {
                console.log(data);
            };


	}];
});