const template = `
<h1>Dashboard</h1>
<button type="button" class="button is-danger" ng-click="$ctrl.doLogout()">Logout</button>
`;

/** @ngInject */
function DashboardController($state, Environment) {
  this.doLogout = function () {
    localStorage.removeItem(Environment.TOKEN);
    $state.go('home');
  };
}

const DashboardComponent = {
  template,
  controller: DashboardController
};

export default DashboardComponent;
