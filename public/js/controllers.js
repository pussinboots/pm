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
function TravisController($scope, $timeout, Travis, TravisBuilds, GitHub, GitHubCommits) {
	$scope.repo='pussinboots'
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
	$scope.load = function() {
		$scope.travis=Travis.get({repo:$scope.repo})
	}
	$scope.builds = function(travi) {
		travi.builds=TravisBuilds.get({slug:travi.slug})
	}
	$scope.readme = function(travi) {
		var res = travi.slug.split("/");
		GitHub.get({repo:res[0], project:res[1]}, function(data){
			travi.readme=atob(data.content)
		})
	}
	$scope.readme = function(travi) {
		var res = travi.slug.split("/");
		GitHub.get({repo:res[0], project:res[1], file:'README.md'}, function(data){
			travi.readme=atob(data.content)
		})
	}
	$scope.checkHeroku = function(travi) {
		return travi.description.indexOf('heroku')>=0
	}
	$scope.travisyml = function(travi) {
		var res = travi.slug.split("/");
		GitHub.get({repo:res[0], project:res[1], file:'.travis.yml'}, function(data){
			travi.travisyml=atob(data.content)
		})
	}
	$scope.commits = function(travi) {
		var res = travi.slug.split("/");
		travi.commits=GitHubCommits.get({repo:res[0], project:res[1]})
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
