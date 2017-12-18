Controller.$inject = ['OAuth', '$state'];
function Controller(OAuth, $state) {
  let $ctrl = this;

  $ctrl.login = function() {
    OAuth.getAccessToken({username: $ctrl.username, password: $ctrl.password})
      .then(function (response) {
        $state.go('home');
      });
  }
} 


export default Controller;
