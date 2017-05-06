const template = `
  <p>{{ $ctrl.message }}</p>
  <button class="button is-warning" ng-click="$ctrl.onClickButton()">
    Testing button
  </button>
`;

const ChildComponent = {
  template,
  bindings: {
    message: '<',
    onClickButton: '&'
  }
};

export default ChildComponent;
