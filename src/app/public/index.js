import angular from 'angular';
import uirouter from 'angular-ui-router';

import routesConfig from './routes';
import LoginForm from './components/login-form';
import Login from './components/login';
import RegisterForm from './components/register-form';
import Register from './components/register';

export default angular.module('app.public', [uirouter])
  .config(routesConfig)
  .component('loginForm', LoginForm)
  .component('login', Login)
  .component('registerForm', RegisterForm)
  .component('register', Register)
  .name;
