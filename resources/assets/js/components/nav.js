
let Component = {
  templateUrl: 'partials/nav.html',
  controller: Controller,
  controllerAs: '$ctrl',
  bindings: {
    brand: '<',
  },
}

Controller.$inject = ['OAuth', 'OAuthToken', 'ApiService'];
function Controller(OAuth, OAuthToken, api) {
  let $ctrl = this;
  $ctrl.isAuthenticated = function() {
    return OAuth.isAuthenticated();
  };

  $ctrl.logout = function() {
    OAuthToken.removeToken();
  }

  if (OAuth.isAuthenticated()) {
    api.getUser().then(function (response) {
      $ctrl.user = response.data;
    });
  }
} 


export default Component
