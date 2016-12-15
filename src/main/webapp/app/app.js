// loads sub modules and wraps them up into the main module
// this should be used for top-level module definitions only
define([
	'angular',
	'uiRouter',
	'ngAnimate',
	'routes',

	'./services/LoginService',
	'./services/AlbumService',
	'./services/MemberService',

	'./directives/FileModel'
], function ( ng ) {
	'use strict';

	var app = ng.module('app', [
        'ui.router',
        'ngAnimate',
        'app.routes',
        'app.loginService',
        'app.albumService',
        'app.memberService',

        'app.fileModel'
	]);

	ng.bootstrap( document, ['app'] );
});