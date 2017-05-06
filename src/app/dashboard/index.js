import angular from 'angular';
import uirouter from 'angular-ui-router';

import routesConfig from './routes';
import Dashboard from './components/dashboard';

export default angular.module('app.dashboard', [uirouter])
  .config(routesConfig)
  .component('dashboard', Dashboard)
  .name;
