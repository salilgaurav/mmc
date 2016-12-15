//	README
//	Statement like 'text!./home/index.html' creates a namespace for html files
//  and  it is converted into javascript template using text library.
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
	'text!./dashboard/member/index.html',
	'./dashboard/member/MemberListController',
	'text!./dashboard/member/members.list.html',
	'./dashboard/member/MemberAddController',
	'text!./dashboard/member/members.add.html',
	'./dashboard/member/MemberEditController',
	'text!./dashboard/member/member.edit.html',

	'./dashboard/events/EventController',
    'text!./dashboard/events/index.html',
    'text!./dashboard/events/event.list.html',
    'text!./dashboard/events/event.add.html',
    'text!./dashboard/events/event.edit.html',

    './dashboard/album/AlbumController',
    'text!./dashboard/album/index.html',
    './dashboard/album/AlbumListController',
    'text!./dashboard/album/album.list.html',
    './dashboard/album/AlbumEditController',
    'text!./dashboard/album/album.edit.html',
    './dashboard/album/AlbumAddController',
    'text!./dashboard/album/album.add.html'


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
	memberTemplate,
	MemberListController,
	memberList,
	MemberAddController,
	memberAdd,
	MemberEditController,
	memberEdit,

	EventController,
	eventTemplate,
	eventList,
	eventAdd,
	eventEdit,

	AlbumController,
	albumTemplate,
	AlbumListController,
	albumList,
	AlbumEditController,
	albumEdit,
	AlbumAddController,
	albumAdd


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
			    controller: MemberController,
			    abstract: true
			})
			.state('dashboard.member.list',{
			    parent: 'dashboard.member',
			    url: '/list',
			    template: memberList,
			    controller: MemberListController
			})
			.state('dashboard.member.add',{
            	parent: 'dashboard.member',
            	url: '/add',
            	template: memberAdd,
            	controller: MemberAddController
            })
            .state('dashboard.member.edit',{
                 parent: 'dashboard.member',
                 url: '/edit/:user',
                 template: memberEdit,
                 controller: MemberEditController,
                 params:{
                       user:{
                       	   value:null,
                       	   squash:true
                       }
                 }
            })
			.state('dashboard.event',{
                parent: 'dashboard',
                url: '/event',
            	template: eventTemplate,
                controller: EventController,
                abstract: true
            })
            .state('dashboard.event.list',{
            	parent: 'dashboard.event',
            	url: '/list',
            	template: eventList
            })
            .state('dashboard.event.add',{
                parent: 'dashboard.event',
                url: '/add',
                template: eventAdd
            })
            .state('dashboard.event.edit',{
                parent: 'dashboard.event',
                url: '/edit/:id',
                template: eventAdd,
                params: {
                    id:{
                        value:null,
                        squash: true
                    }
                }
            })
            .state('dashboard.album',{
                parent: 'dashboard',
                url: '/album',
                template: albumTemplate,
                controller: AlbumController,
                abstract: true
            })
            .state('dashboard.album.list',{
                parent: 'dashboard.album',
                url: '/list',
                template: albumList,
                controller: AlbumListController
            })
            .state('dashboard.album.add',{
                parent: 'dashboard.album',
                url: '/add',
                template: albumAdd,
                controller: AlbumAddController
            })
            .state('dashboard.album.edit',{
                parent: 'dashboard.album',
                url: '/edit/:id',
                template: albumEdit,
                params: {
                    id: {
                        value: null,
                        squash: true
                    }
                },
                controller: AlbumEditController
            });



	}]);
});