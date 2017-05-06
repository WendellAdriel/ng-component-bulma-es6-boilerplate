const template = `
  <h1>{{ $ctrl.greeting }}</h1>
  <child message="'testing'" on-click-button="$ctrl.clickButton()" />
`;

/** @ngInject */
function HomeController($log) {
  this.greeting = 'Hello World!';

  this.clickButton = function () {
    $log.log(12);
    this.greeting = 'Hello test component';
  };
}

const HomeComponent = {
  template,
  controller: HomeController
};

export default HomeComponent;
