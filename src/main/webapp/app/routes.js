//	README
//	Statement like 'text!./home/index.html' creates a namespace for html files
//  and through gulp task it is converted into javascript template using text library.
define([
	'angular',

	'text!./root/root.html',

	'./header/HeaderController',
	'text!./header/index.html',

	'./footer/FooterController',
	'text!./footer/index.html',

	'./login/LoginController',
	'text!./login/index.html',

	'./error/ErrorController',
	'text!./error/index.html',

	'./dashboard/DashboardController',
	'text!./dashboard/index.html',

	'./dashboard/member/MemberController',
	'text!./dashboard/member/index.html'

], function (
	ng,

	rootTemplate,

	HeaderController,
	headerTemplate,

	FooterController,
	footerTemplate,

	LoginController,
	loginTemplate,

	ErrorController,
	errorTemplate,

	DashboardController,
	dashboardTemplate,

	MemberController,
	memberTemplate


) {
	'use strict';

	ng.module('app.routes',[]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider' , function( $stateProvider, $urlRouterProvider, $locationProvider , $httpProvider ) {

		// Default state or if unmatched redirect to this state
		$urlRouterProvider.otherwise( '/login' );

		// Now set up the states
		$stateProvider
			.state('root',{
				abstract: true,
				views: {
					'header@root': {
						template: headerTemplate
					},
					'footer@root': {
						template: footerTemplate,
						controller: FooterController
					},
					'': {
						template: rootTemplate
					}
				}
			})
			.state('login',{
			    parent: 'root',
			    url: '/login',
			    template: loginTemplate,
			    controller: LoginController
			})
			.state('error',{
			    parent: 'root',
			    url: '/error',
			    template: errorTemplate,
			    controller: ErrorController
			})
			.state('dashboard',{
			    parent: 'root',
			    abstract: true,
			    url: '/dashboard',
			    template: dashboardTemplate,
			    controller: DashboardController
			})
			.state('dashboard.member',{
			    parent: 'dashboard',
			    url: '/member',
			    template: memberTemplate,
			    controller: MemberController
			});



	}]);
});