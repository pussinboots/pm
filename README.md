pm [Twitter](https://twitter.com/pussinbootsdev)
==================
[![Build Status](https://travis-ci.org/pussinboots/pm.svg?branch=master)](https://travis-ci.org/pussinboots/pm)
[![Coverage Status](https://img.shields.io/coveralls/pussinboots/pm.svg)](https://coveralls.io/r/pussinboots/pm?branch=master)
[![Dependencies](https://david-dm.org/pussinboots/pm.png)](https://david-dm.org/pussinboots/pm)
[![Heroku](http://heroku-badge.heroku.com/?app=poman)](https://poman.herokuapp.com)

##Description

An very simple project management tool to handle open source project specially by github. It is complete client based and need no backend at the moment. The idea is to have a overview site like you know from jenkins for all of your open source projects. And on that overview you have all project relevant informations like code coverage, dependencies, build status and so on. There are a lot of open source free to use tools like travis ci, coveralls, david dm, heroku and so on but i need a site where all this information is integrated and updated for all of my relevant projects. 

##Live

It is ready to use in an early stage so click on the heroku badge at the top. Enter your repo in the repo text field and
hit load than the travis api is used to fetch all projects of that repo.

There is also a second page [New Project](http://poman.herokuapp.com/new) which support to create new project enter the repo and the project name than there is some useful commands for travis, heroku and github and also a README-md markdown code with contains the most badges. This page helps me to get a new project integrated with travis, heroku and github in some minutes.

##Todo
* new project site
 * integrate github per api to create new project (github oauth)
 * integrate travis per api to enable build (github oauth)
 * integrate heroku per api to create new app (oauth???)
 * download link with bash script contains all commands to setup the new project (travis, heroku, github)
 * support other providers like (coveralls, ...) for the project setup

##Features
* project overview based travis registered projects under a configurable repo
* project overview contains badge of Travis Ci, Coveralls, David DM, Sourcegraph, [Heroku](https://github.com/pussinboots/heroku-badge), Gitter
* project overview configurable refresh period (min 1 second, default 20 seconds) that fetch the new badges be careful with that can be a lot of load for the badges provider
* new project page
 * contains markdown with all badges
 * git first commit commands
 * travis enable commands
 * heroku create app commands

License
--------------

pm is released under the [MIT License](http://opensource.org/licenses/MIT).
