/** @ngInject */
export default function UrlBuildService(Environment) {
  return {
    buildUrl
  };

  function buildUrl() {
    const urlArray = [Environment.apiHost, ...arguments];
    const url = urlArray.join('/');
    return url;
  }
}
