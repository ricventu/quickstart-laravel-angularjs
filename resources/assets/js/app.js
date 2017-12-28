
/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

require('./bootstrap');

require('angular');
require('@uirouter/angularjs');
require('angular-oauth2');

import appConfig from './config';
import appRouter from './router';
import navComponent from './components/nav';
import LoginController from './controllers/login';
import ApiService from './services/api';
import interceptor401 from './interceptors/401';

let app = angular.module('app', ['angular-oauth2', 'ui.router']);

app.config(appConfig);
app.config(appRouter);

app.service('ApiService', ApiService);
app.component('laNav', navComponent);
app.controller('LoginController', LoginController);

// register the interceptor as a service
app.factory('interceptor401', interceptor401);
app.config(['$httpProvider', function($httpProvider) {
  $httpProvider.interceptors.push('interceptor401')
}]);

// handle Oauth's events
app.run(['$rootScope', '$window', 'OAuth', 'OAuthToken', function ($rootScope, $window, OAuth, OAuthToken) {
  $rootScope.$on('oauth:error', function (event, rejection) {
    // Ignore `invalid_grant` error - should be catched on `LoginController`.
    if ('invalid_grant' === rejection.data.error) {
      console.log('invalid grant');
      return;
    }

    // Refresh token when a `invalid_token` error occurs.
    if ('invalid_token' === rejection.data.error) {
      console.log('invalid token');
      return OAuth.getRefreshToken();
    }

    if ('unauthenticated' === rejection.data.error) {
      console.log('Unauthenticated');
      return OAuthToken.removeToken();
    }

    // Redirect to `/login` with the `error_reason`.
    return $window.location.href = '/login?error_reason=' + rejection.data.error;
  });
}]);


