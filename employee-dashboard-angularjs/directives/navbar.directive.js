app.directive("appNavbar" , function(){
    return {
        restrict : "E", // the directive will be used as an html element
        templateUrl : "components/navbar/navbar.html",
        controller : "NavbarController"
    }
})