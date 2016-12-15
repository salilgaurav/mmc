// loads sub modules and wraps them up into the main module
// this should be used for top-level module definitions only
define([
	'angular',
	'uiRouter',
	'routes',

	'./services/LoginService',
	'./services/AlbumService',

	'./directives/FileModel'
], function ( ng ) {
	'use strict';

	var app = ng.module('app', [
        'ui.router',
        'app.routes',
        'app.loginService',
        'app.albumService',
        'app.fileModel'
	]);

	ng.bootstrap( document, ['app'] );
});