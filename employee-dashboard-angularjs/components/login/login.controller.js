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
                console.log(response.data)
            })
            .catch(function(error){
                console.log(error);

            })
            .finally(function(){
                $scope.loading = false
            })
   }

});