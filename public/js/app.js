'use strict';

/* App Module */
var demoApp = angular.module('demoApp', ['services', 'DataTable', 'ngRoute', 'oauth', 'ngClipboard', 'mobile-angular-ui', 'angularjs-decode-uri']);

demoApp.config(function ($routeProvider) {
	$routeProvider
	.when('/travis', { templateUrl: 'partials/overview.html', controller: TravisController})
	.when('/details', { templateUrl: 'partials/details.html', controller: DetailsController})
	.when('/settings', { templateUrl: 'partials/settings.html', controller: SettingsController})
	.when('/projects', { templateUrl: 'partials/projects.html', controller: ProjectController})
	.when('/new', { templateUrl: 'partials/new-project.html', controller: ProjectController})
	.otherwise({ redirectTo: '/travis' });
});


demoApp.run(function ($rootScope, $timeout) {

	$rootScope.config = {
		repo: 'pussinboots',
		interval: 20000,
		reloadActivated:0
	}
	$rootScope.activateReload = function(reloadActivated) {
		console.log("check reload "+ reloadActivated)
		$rootScope.config.reloadActivated=reloadActivated;
		if(reloadActivated) {
			console.log("perform reload")
			$rootScope.reloadpic(reloadActivated);
		}
	}
	$rootScope.reloadpic =function(reloadActivated)
	{
		var interval = $rootScope.config.interval
		$rootScope.rand = new Date().getTime();
		if (interval<10000) {
			interval=10000
		}
		$rootScope.$apply();
		console.log("reload " + reloadActivated)
		if(reloadActivated) {
			$timeout(function() {
				$rootScope.reloadpic($rootScope.config.reloadActivated);
			}, interval);
		}
	}
});
