import './style.scss';
const template = require('./template.html');

/** @ngInject */
function PublicHeaderController(Environment) {
  this.title = Environment.APP_NAME;
  this.description = Environment.APP_DESCRIPTION;
}

const PublicHeaderComponent = {
  template,
  controller: PublicHeaderController
};

export default PublicHeaderComponent;
