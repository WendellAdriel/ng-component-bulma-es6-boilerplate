import './style.scss';
const template = require('./template.html');

/** @ngInject */
function PublicFooterController(Environment) {
  this.author = Environment.APP_AUTHOR;
  this.link = Environment.APP_AUTHOR_LINK;
}

const PublicFooterComponent = {
  template,
  controller: PublicFooterController
};

export default PublicFooterComponent;
