


Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $urlRouterProvider
    .otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: "partials/home.html"
    })
    .state('login', {
      url: '/login',
      templateUrl: "partials/login.html",
      controller: "LoginController",
      controllerAs: "$ctrl",
    })
    ;
}

export default Router;