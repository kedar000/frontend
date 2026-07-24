app.controller("LoginController", function (
    $scope ,
    $location,
    AuthService
) {
   $scope.credentials = {
        username : "",
        password : "",  
   }

   $scope.loading = false;
   $scope.error = ""
   $scope.login = function(){

        $scope.loading = true;
        $scope.error = "";
        AuthService.login($scope.credentials)
            .then(function (response){
                AuthService.setCurrentUser(response.data.user)

                console.log("User : "+ JSON.stringify(response.data.user))

                localStorage.setItem(
                    "accessToken" ,
                    response.data.accessToken
                );
                localStorage.setItem(
                    "refreshToken",
                    response.data.refreshToken
                )

                $location.path("/")
            })
            .catch(function(error){
                $scope.error = error.data.message || "Login Failed"

            })
            .finally(function(){
                $scope.loading = false
            })
   }

});