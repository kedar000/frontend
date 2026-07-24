app.config(function ($routeProvider) {
  $routeProvider

    .when("/", {
      templateUrl: "components/dashboard/dashboard.html",
      controller: "DashboardController",
      requiresAuth: true
    })
    
    .when("/login", {
      templateUrl: "components/login/login.html",
      controller: "LoginController",
      requiresAuth: false
    })
    
    .when("/employees", {
      templateUrl: "components/employees/employees.html",
      controller: "EmployeesController",
      requiresAuth: true
    })
    
    .when("/employee/:id", {
      templateUrl: "components/employee-details/employee-details.html",
      controller: "EmployeeDetailsController",
      requiresAuth: true
    })
    
    .when("/profile", {
      templateUrl: "components/profile/profile.html",
      controller: "ProfileController",
      requiresAuth: true
    })
    
    .otherwise({
      templateUrl: "components/not-found/404.html",
      controller: "NotFoundController",
      requiresAuth: false
    });


    
});
