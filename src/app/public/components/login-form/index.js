import './style.scss';
const template = require('./template.html');

/** @ngInject */
function LoginFormController($http, $state, Environment, MessageService) {
  (function () {
    if (localStorage.getItem(Environment.TOKEN)) {
      $http.get(`${Environment.API_URL}/auth/user`).then(() => $state.go('dashboard')
      , err => MessageService.showMessage('error', err));
    }
  })();

  this.doLogin = function (form) {
    if (form.$valid) {
      $http.post(`${Environment.API_URL}/auth`, this.user).then(res => {
        if (!res.success) {
          MessageService.showMessage('error', res.meta.message);
          return;
        }
        localStorage.setItem(Environment.TOKEN, res.data.token);
        $state.go('dashboard');
      }, err => MessageService.showMessage('error', err));
    }
  };
}

const LoginFormComponent = {
  template,
  controller: LoginFormController
};

export default LoginFormComponent;
