
let Component = {
  templateUrl: 'partials/nav.html',
  controller: Controller,
  controllerAs: '$ctrl',
  bindings: {
    brand: '<',
  },
}

Controller.$inject = ['OAuth', 'OAuthToken'];
function Controller(OAuth, OAuthToken) {
  let $ctrl = this;
  $ctrl.isAuthenticated = function() {
    return OAuth.isAuthenticated();
  };

  $ctrl.logout = function() {
    OAuthToken.removeToken();
  }
} 


export default Component
