/** @ngInject */
export default function routesConfig($stateProvider) {
  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      component: 'dashboard'
    });
}
