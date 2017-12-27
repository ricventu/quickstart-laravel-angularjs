
let Component = {
  templateUrl: 'partials/nav.html',
  controller: Controller,
  controllerAs: '$ctrl',
  bindings: {
    brand: '<',
  },
}

Controller.$inject = ['$scope','OAuth', 'OAuthToken', 'ApiService'];
function Controller($scope, OAuth, OAuthToken, api) {
  let $ctrl = this;
  $ctrl.isAuthenticated = function() {
    return OAuth.isAuthenticated();
  };

  $ctrl.logout = function() {
    OAuthToken.removeToken();
  }

  $scope.$watch(OAuth.isAuthenticated, function(authenticated) {
    if (authenticated) {
      api.getUser().then(function (response) {
        $ctrl.user = response.data;
      }, function (response) {
      });
    } else {
      $ctrl.user = {};
    }
  });
  
} 


export default Component
