app.config(function ($routeProvider) {
  $routeProvider

    .when("/", {
      templateUrl: "components/dashboard/dashboard.html",
      controller: "DashboardController",
    })

    .when("/login", {
      templateUrl: "components/login/login.html",
      controller: "LoginController",
    })

    .when("/employees", {
      templateUrl: "components/employees/employees.html",
      controller: "EmployeesController",
    })

    .when("/employee/:id", {
      templateUrl: "components/employee-details/employee-details.html",
      controller: "EmployeeDetailsController",
    })

    .when("/profile", {
      templateUrl: "components/profile/profile.html",
      controller: "ProfileController",
    })

    .otherwise({
      templateUrl: "components/not-found/404.html",
      controller: "NotFoundController",
    });


    
});
