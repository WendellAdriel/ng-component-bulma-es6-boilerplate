/** @ngInject */
export default function NotFoundInterceptor($q, $injector) {
  return {
    responseError(rejection) {
      if (rejection.status === 404) {
        $injector.get('$state').go('not-found');
      }
      return $q.reject(rejection);
    }
  };
}
