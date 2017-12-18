
appConfig.$inject = ['OAuthProvider', 'OAuthTokenProvider'];
function appConfig(OAuthProvider, OAuthTokenProvider) {
  OAuthProvider.configure({
    baseUrl: '/',
    clientId: process.env.MIX_AUTH_CLIENT_ID,
    clientSecret: process.env.MIX_AUTH_CLIENT_SECRET,
    grantPath: '/oauth/token',
    revokePath: '/oauth/token/revoke'
  });

  if (location.protocol != 'https:') {
    console.warn("disabling oauth token secure");
    OAuthTokenProvider.configure({
      name: 'token',
      options: {
        secure: false
      }
    });
  }
}

export default appConfig;