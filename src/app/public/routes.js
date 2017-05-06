/** @ngInject */
export default function routesConfig($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      component: 'login'
    })
    .state('register', {
      url: '/register',
      component: 'register'
    });
}
