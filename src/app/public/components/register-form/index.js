import './style.scss';
const template = require('./template.html');

/** @ngInject */
function RegisterFormController($http, $state, Environment, MessageService) {
  this.doRegister = function (form) {
    if (form.$valid) {
      $http.post(`${Environment.API_URL}/register`, this.user).then(res => {
        if (!res.success) {
          MessageService.showMessage('error', res.meta.message);
          return;
        }

        MessageService.showMessage('success', 'User registered successfully');
        $state.go('home');
      }, err => MessageService.showMessage('error', err));
    }
  };
}

const RegisterFormComponent = {
  template,
  controller: RegisterFormController
};

export default RegisterFormComponent;
