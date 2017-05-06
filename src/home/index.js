import angular from 'angular';
import uirouter from 'angular-ui-router';

import routesConfig from './routes';
import Child from './components/child';
import Home from './components/home';

export default angular.module('app.home', [uirouter])
  .config(routesConfig)
  .component('child', Child)
  .component('home', Home)
  .name;
