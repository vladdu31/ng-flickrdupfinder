'use strict';

require('angular-route');

angular.module('flickrDupFinder', ['ngRoute', require('./controllers').name])
  .config(
    ['$locationProvider', '$routeProvider',
     function($locationProvider, $routeProvider) {
       //probably breaks things due to oauth redirect landing page hack below
       //$locationProvider.html5Mode(true);

       // the oauth redirect callback page must be matched with .otherwise
       $routeProvider
         .when('/', {
           templateUrl: 'partials/start.html',
           controller: 'startCtrl'
         })
         .otherwise({
           templateUrl: 'partials/photos.html',
           controller: 'photoCtrl',
           resolve: { 'Flickr': 'Flickr' }
         });
     }]);
