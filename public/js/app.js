'use strict';

/* App Module */
var demoApp = angular.module('demoApp', ['services']);

demoApp.config(function ($routeProvider) {
    $routeProvider
        .when('/projects', { templateUrl: 'partials/projects.html', controller: ProjectController})
        .otherwise({ redirectTo: '/projects' });
});
