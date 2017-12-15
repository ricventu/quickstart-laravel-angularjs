
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

let app = angular.module('app', ['angular-oauth2', 'ui.router']);

app.config(appConfig);
app.config(appRouter);

app.service('ApiService', ApiService);
app.component('laNav', navComponent);
app.controller('LoginController', LoginController);

