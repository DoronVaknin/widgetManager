// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var WidgetManager = angular.module('widget_manager', ['ui.router', 'ui.bootstrap', 'ngAnimate'])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            abstract: true,
            views: {
                'main': {
                    templateUrl: 'templates/home.html'
                }
            }
        })
        .state('home.views', {
            url: '/:id',
            views: {
                'summary@home': {
                    templateUrl: 'templates/home.summary.html'
                },
                'detail@home': {
                    templateUrl: 'templates/home.detail.html'
                }
            }
        })
        .state('add_edit', {
            url: '/edit/:id',
            views: {
                'main': {
                    templateUrl: 'templates/add_edit.html'
                }
            }
        });

    // default route
    $urlRouterProvider.otherwise('/');
})

.run(function($rootScope, $state, $stateParams) {
    // $rootScope.$state = $state;
    // $rootScope.$stateParams = $stateParams;
    $state.go('home.views');
});