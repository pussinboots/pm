'use strict';

function ProjectController($scope) {
	$scope.projects={repo:'pussinboots', 
		projects:[{name:'angularjs-crypto', deployment:{type:'heroku'}, language:'javascript'},
			  {name:'angularjs-interpolate-interceptor', deployment:{type:'heroku', app:'angularjs-ii'}, 					language:'javascript'},
			  {name:'demo-google-plus-auth', deployment:{type:'heroku', app:'demo-gpa'}, language:'javascript'},
			  {name:'heroku-badge', deployment:{type:'heroku'}, language:'javascript'},
			  {name:'bankapp', language:'Scala'},
			  {name:'pm', language:'NodeJS', deployment:{type:'heroku', app:'poman'}},
			  {name:'akkreditierungsrat', language:'Scala', deployment:{type:'heroku', app:'lit-ocean-2199'}}]
	};
	$scope.tools=[{name:'heroku', link:'//www.heroku.com', description:'Platform as a Servic', type:'paas', language:'Ruby, Java, Scala, D'}, {name:'david-dm', link:'//www.david-dm', description:'dependency analyzer and updater', type:'dependency', language:'nodejs'}, {name:'coveralls', link:'//coveralls.io/', description:'test coverage', type:'coverage', language:'Scala, NodeJS'}, {name:'heroku-badge', link:'//heroku-badge.herokuapp.com/projects.html', description:'check heroku project running', type:'deploy', language:'html'}, {name:'Version Eye', link:'//www.versioneye.com', language:'PHP, Ruby, Python, JavaScript, Clojure, Objective-C, Groovy', description:'dependency analyzer and updater', type:'dependency'}, {name:'travis', link:'//travis-ci.org', description:'free and easy to use build server for continous integration', type:'continous integration', language:'Ruby, NodeJs, Scala, Java, ...'}]
}
