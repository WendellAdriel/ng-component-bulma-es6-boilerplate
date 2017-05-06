/** @ngInject */
export default function config($httpProvider) {
  $httpProvider.interceptors.push('ParseResponseInterceptor');
  $httpProvider.interceptors.push('NotFoundInterceptor');
  $httpProvider.interceptors.push('AuthInterceptor');
}
