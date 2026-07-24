app.factory("AuthInterceptor" , function(
    $q,
    $injector
){
    return {
        request : function(config){
            
            const AuthService = $injector.get("AuthService")
            
            const token = AuthService.getAccessToken()
            
            if(token){
                config.headers.Authorization = "Bearer " + token;
            }
            return config
        },
        responseError : function (rejection){

            const AuthService = $injector.get("AuthService")
            
            if(rejection.status === 401){
               return AuthService.refreshToken()
                        .then(function(response){
                            AuthService.setAccessToken(
                                response.data.accessToken
                            )
                            console.log("Access Token Refreshed")
                        })
            }
            return $q.reject(rejection)
        }
    }
})