/** @ngInject */
export default function AuthInterceptor($q, $injector, Environment) {
  return {
    request(requestConfig) {
      requestConfig.headers = requestConfig.headers || {};
      const token = localStorage.getItem(Environment.TOKEN);
      if (token) {
        requestConfig.headers.Authorization = 'Bearer ' + token;
      }
      return requestConfig;
    },
    responseError(rejection) {
      if (rejection.status === 400 || rejection.status === 401 || rejection.status === 403) {
        $injector.get('$state').go('home');
      }
      return $q.reject(rejection);
    }
  };
}
