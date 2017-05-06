import angular from 'angular';
import uirouter from 'angular-ui-router';

import routesConfig from './routing';
import './index.scss';

import ConfigModule from './config';
import SupportModule from './support';
import PublicModule from './app/public';
import DashBoardModule from './app/dashboard';

angular
  .module('app', [
    uirouter,
    ConfigModule,
    SupportModule,
    PublicModule,
    DashBoardModule
  ])
  .config(routesConfig);
