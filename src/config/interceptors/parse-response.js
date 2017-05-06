import angular from 'angular';

/** @ngInject */
export default function ParseResponseInterceptor() {
  return {
    response(response) {
      if (angular.isObject(response.data)) {
        return response.data;
      }
      return response;
    }
  };
}
