import angular from 'angular';
import uirouter from 'angular-ui-router';

import routesConfig from './routing';
import './index.scss';

import HomeModule from './home';

angular
  .module('app', [
    uirouter,
    HomeModule
  ])
  .config(routesConfig);
