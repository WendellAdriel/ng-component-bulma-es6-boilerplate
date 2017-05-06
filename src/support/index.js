import angular from 'angular';

import UrlBuildService from './services/url-build';
import MessageService from './services/message';

import PublicHeader from './components/public-header';
import PublicFooter from './components/public-footer';

export default angular.module('app.support', [])
  .factory('UrlBuildService', UrlBuildService)
  .factory('MessageService', MessageService)
  .component('publicHeader', PublicHeader)
  .component('publicFooter', PublicFooter)
  .name;
