var app = angular.module("employeeApp" , [
    "ngRoute"
])

app.config(function($httpProvider){
    $httpProvider.interceptors.push("AuthInterceptor")
})

app.run(function($rootScope , $location , AuthService){
    
    $rootScope.isAuthenticated = function(){
        return AuthService.isAuthenticated()
    };

    $rootScope.$on("$routeChangeStart" , function(event , next){
        const isLoggedIn = AuthService.isAuthenticated();
        if(next.requiresAuth && !isLoggedIn){
            event.preventDefault();
            $location.path("/login")
        }
        
    })
})