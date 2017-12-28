

interceptor401.$inject = ['$q', 'OAuthToken', '$rootScope'];

function interceptor401($q, OAuthToken, $rootScope) {
  return {
    'responseError': function(rejection) {
      if (401 === rejection.status && rejection.data && rejection.data.message === "Unauthenticated.") {
        rejection.data.error = "unauthenticated";
        $rootScope.$emit("oauth:error", rejection);
      }
      return $q.reject(rejection);
    }
  }
}


export default interceptor401;
