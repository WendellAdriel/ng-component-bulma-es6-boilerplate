import angular from 'angular';

import Config from './config';
import Environment from './env';
import AuthInterceptor from './interceptors/auth';
import NotFoundInterceptor from './interceptors/not-found';
import ParseResponseInterceptor from './interceptors/parse-response';

export default angular.module('app.config', [])
  .factory('AuthInterceptor', AuthInterceptor)
  .factory('NotFoundInterceptor', NotFoundInterceptor)
  .factory('ParseResponseInterceptor', ParseResponseInterceptor)
  .constant('Environment', Environment)
  .config(Config)
  .name;
