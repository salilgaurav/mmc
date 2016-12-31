define([
	'angular'
], function (
	ng
) {
	'use strict';

	var memberService = ng.module('app.ticketService' , []);

	return memberService.factory( 'ticketService', ['$http',  function ( $http ) {

		// Adding a dev url for local, comment out in index.html before deployment!
		var url = 'http://localhost:8081/ticket';

		return {
			create: function ( ticket ) {
				return $http.post( url+'/create', member );
			},

			update: function ( ticket ) {
               	return $http.put( url+'/update', member );
            },

			list: function() {
			    return $http.get( url+'/list' );
			},

			get: function( id ) {
			    return $http.get( url+'/get?ticketId='+id );
			},

			delete: function( id ) {
            	return $http.delete( url+'/delete?ticketId='+id );
            }

		};
	}]);
});
