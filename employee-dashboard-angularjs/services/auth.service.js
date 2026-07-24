app.service("AuthService" , function ($http){

    let currentUser = null;

    this.login = function(credentials){
        return $http.post(
            API.BASE_URL + "/auth/login",
            credentials
        )
    };

    this.getAccessToken = function (){
        return localStorage.getItem("accessToken")
    };

    this.getRefreshToken = function (){
        return localStorage.getItem("refreshToken")
    };
    
    this.setAccessToken = function(token){
        localStorage.setItem("accessToken" , token)
    }

    this.isAuthenticated = function(){
        return !!this.getAccessToken();
    }

    this.setCurrentUser = function (user){
        currentUser = user;
    }

    this.getCurrentUser = function(){
        return currentUser
    }

    this.logout = function(){

        this.clearCurrentUser()
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")

    }

    this.clearCurrentUser = function(){
        currentUser = null;
    }

    this.getProfile = function(){
        return $http.get(API.BASE_URL + "/auth/me")
    }

    this.refreshToken = function(){
        return $http.post(
            API.BASE_URL + "/auth/refresh",
            {
                refreshToken : this.getRefreshToken()
            }
        )
    }
})