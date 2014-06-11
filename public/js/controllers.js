'use strict';
function GithubController($scope, $http) {
	$http({method: 'GET', url: "https://raw.githubusercontent.com/"+$scope.$parent.projects.repo+"/"+$scope.$parent.project.name+"/master/.travis.yml"}).
	success(function(data, status, headers, config) {
		$scope.content=data;
	}).
	error(function(data, status, headers, config) {
		console.log('error')
	});
}

function SettingsController($rootScope) {

}

function DetailsController($scope, $http, Project, TravisCl, GitHubCl) {
	$scope.project=Project.get();
	console.log('selected project ' + Project.get());
	$scope.builds = function(project) {
		TravisCl.getBuilds({uri:project.slug+'/builds'}, function(data) {
			project.builds=data.builds;
		})
	}
	$scope.build = function(project) {
		project.build=TravisCl.getBuild({uri:project.slug+'/builds/'+project.last_build_id})
	}

        $scope.setbuild = function(project, buildId) {
		project.build=TravisCl.getBuild({uri:project.slug+'/builds/'+buildId})
	}
	$scope.log = function(job) {
		$http({method: 'GET', url: 'https://api.travis-ci.org/jobs/'+job.id+'/log'}).
		    success(function(data, status, headers, config) {
			job.log=data;
		    }).
		    error(function(data, status, headers, config) {
		    });
		//job.log=TravisLog.getLog({logId:job.log_id})
	}
	$scope.readme = function(project) {
		var res = project.slug.split("/");
		GitHubCl.getFile({repo:res[0], project:res[1], uri:'contents/README.md'}, function(data){
			project.readme=atob(data.content)
		})
	}
	$scope.travisyml = function(project) {
		var res = project.slug.split("/");
		GitHubCl.getFile({repo:res[0], project:res[1], uri:'contents/.travis.yml'}, function(data){
			project.travisyml=atob(data.content)
		})
	}
	$scope.commits = function(project) {
		var res = project.slug.split("/");
		project.commits=GitHubCl.getCommits({repo:res[0], project:res[1]})
	}
	$scope.build(Project.get());
}

function TravisController($scope, TravisCl, Project, $location) {
	$scope.open=true;
	$scope.load = function() {
		$scope.travis=TravisCl.getProjects({uri:$scope.config.repo})
		//$scope.travis=Travis.get({repo:$scope.config.repo})
	}
	$scope.checkHeroku = function(project) {
		return project.description.indexOf('heroku')>=0
	}
	$scope.select = function(project) {
		console.log('selected project overview' + project);
		Project.set(project);
		$location.path('/details');
	}
	$scope.load()
}
function ProjectController($scope, $timeout) {
	$scope.getTextToCopy = function() {
		return "ngClip is awesome!";
	}

	$scope.doSomething = function () {
		console.log("NgClip...");
	}
	$scope.interval = 20000
	$scope.reloadpic =function()
	{
		var timestamp = new Date().getTime();
		var interval = $scope.interval
		$scope.rand = timestamp;
		console.log("reload build")
		if (interval<1000) {
			interval=1000
		}
		$timeout($scope.reloadpic, interval);
	}
	$scope.reloadpic()
	$scope.tools=[
	{name:'heroku', link:'//www.heroku.com', description:'Platform as a Servic', type:'paas', language:'Ruby, Java, Scala, D'}, {name:'david-dm', link:'//www.david-dm', description:'dependency analyzer and updater', type:'dependency', language:'nodejs'}, {name:'coveralls', link:'//coveralls.io/', description:'test coverage', type:'coverage', language:'Scala, NodeJS'},
	{name:'heroku-badge', link:'//heroku-badge.herokuapp.com/projects.html', description:'check heroku project running', type:'deploy', language:'html'}, 
	{name:'Version Eye', link:'//www.versioneye.com', language:'PHP, Ruby, Python, JavaScript, Clojure, Objective-C, Groovy', description:'dependency analyzer and updater', type:'dependency'},
	{name:'travis', link:'//travis-ci.org', description:'free and easy to use build server for continous integration', type:'continous integration', language:'Ruby, NodeJs, Scala, Java, ...'},
	{name:'gitter', link:'//gitter.im/', description:'free to use chat for open source projects', type:'chat', language:''}]
}
