app.controller("NavbarController" , function(
    $scope,
    $location,
    AuthService
){
    $scope.logout = function (){
        AuthService.logout();
        $location.path("/login")
    }
})