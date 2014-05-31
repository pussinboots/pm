'use strict';

/* App Module */
var demoApp = angular.module('demoApp', ['services', 'DataTable']);

demoApp.config(function ($routeProvider) {
    $routeProvider
        .when('/travis', { templateUrl: 'partials/overview.html', controller: TravisController})
        .when('/details', { templateUrl: 'partials/details.html', controller: TravisController})
        .when('/projects', { templateUrl: 'partials/projects.html', controller: ProjectController})
	.when('/new', { templateUrl: 'partials/new-project.html', controller: ProjectController})
        .otherwise({ redirectTo: '/travis' });
});
