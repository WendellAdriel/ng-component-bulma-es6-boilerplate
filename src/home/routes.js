/** @ngInject */
export default function routesConfig($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
}
