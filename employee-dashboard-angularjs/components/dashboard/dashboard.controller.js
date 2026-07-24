app.controller(
  "DashboardController",
  function ($scope, EmployeeService, AuthService) {
    $scope.user = AuthService.getCurrentUser();
    console.log($scope.user)

    $scope.totalEmployees = 0;
    $scope.totalDepartments = 0;
    $scope.averageAge = 0;

    $scope.departmentStats = [];
    $scope.recentEmployees = [];

    EmployeeService.getEmployees()

      .then(function (response) {
        const employees = response.data;

        
        $scope.totalEmployees = employees.length;

        
        const departments = [
          ...new Set(
            employees.map(function (employee) {
              return employee.company.department;
            }),
          ),
        ];

        $scope.totalDepartments = departments.length;

        
        const totalAge = employees.reduce(function (sum, employee) {
          return sum + employee.age;
        }, 0);

        $scope.averageAge = Math.round(totalAge / employees.length);

        
        const departmentMap = {};

        employees.forEach(function (employee) {
          const department = employee.company.department;

          if (!departmentMap[department]) {
            departmentMap[department] = 0;
          }

          departmentMap[department]++;
        });

        $scope.departmentStats = Object.keys(departmentMap).map(function (key) {
          return {
            department: key,
            count: departmentMap[key],
          };
        });

        
        $scope.recentEmployees = employees.slice(0, 5);
      })

      .catch(function (error) {
        console.error(error);
      });
  },
);
