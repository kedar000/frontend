app.service("AuthService" , function ($http){

    this.login = function(credentials){
        return $http.post(
            API.BASE_URL + "/auth/login",
            credentials
        )
    }
})