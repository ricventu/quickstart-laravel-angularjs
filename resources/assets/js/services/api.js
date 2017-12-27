
Service.$inject = ['$http'];
function Service($http) {
  let srv = this;

  srv.getUser = function () {
    return $http.get('/api/user');
  }
}

export default Service;
