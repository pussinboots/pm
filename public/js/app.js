'use strict';

/* App Module */
var demoApp = angular.module('demoApp', ['services']);

demoApp.config(function ($routeProvider) {
    $routeProvider
        .when('/travis', { templateUrl: 'partials/travis.html', controller: TravisController})
        .when('/projects', { templateUrl: 'partials/projects.html', controller: ProjectController})
	.when('/new', { templateUrl: 'partials/new-project.html', controller: ProjectController})
        .otherwise({ redirectTo: '/travis' });
});
