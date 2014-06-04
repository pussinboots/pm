'use strict';

/* Services */

angular.module('services', ['ngResource'], function ($provide) {

    $provide.factory('Travis', function ($resource) {
        return $resource('https://api.travis-ci.org/repos/:repo.json', {}, {
            get: {method: 'GET', isArray:true}
        });
    });

    $provide.factory('TravisBuilds', function ($resource) {
        return $resource('https://api.travis-ci.org/repos/:slug/builds.json', {}, {
            get: {method: 'GET', isArray:true}
        });
    });

    $provide.factory('GitHubCommits', function ($resource) {
        return $resource('https://api.github.com/repos/:repo/:project/commits', {}, {
            get: {method: 'GET', isArray:true}
        });
    });

    $provide.factory('GitHub', function ($resource) {
        return $resource('https://api.github.com/repos/:repo/:project/contents/:file', {}, {
            get: {method: 'GET'}
        });
    });

    $provide.factory('Empty', function ($resource) {
        return $resource('/assets/empty', {}, {
            post: {method: 'POST', crypt: true}
        });
    });

    $provide.factory('Project', function () {
        var property;

        return {
            get: function () {
                return property;
            },
            set: function(value) {
                property = value;
            }
        };
    });
});
