app.service("EmployeeService", function ($http) {

  this.getEmployees = function () {
    return $http.get(API.BASE_URL + "/employees");
  };

  this.searchEmployee = function (searchTerm) {
    return $http.get(API.BASE_URL + "/employees", {
      q: searchTerm,
    });
  };

  this.getEmployeeById = function (id) {
    return $http.get(API.BASE_URL + "/employees/" + id);
  };

});
