(function (module) {
	gst.controllers = _.extend(module, {
		CompanyController: function (scope, resourceFactory, location) {
            /*scope.employees = [];
            scope.routeTo = function (id) {
                location.path('/viewemployee/' + id);
            };

            if (!scope.searchCriteria.employees) {
                scope.searchCriteria.employees = null;
                scope.saveSC();
            }
            scope.filterText = scope.searchCriteria.employees;

            scope.onFilter = function () {
                scope.searchCriteria.employees = scope.filterText;
                scope.saveSC();
            };

            resourceFactory.employeeResource.getAllEmployees(function (data) {
                scope.employees = data;
            });*/
        }
    });
	gst.ng.application.controller('CompanyController', ['$scope', 'ResourceFactory', '$location', gst.controllers.CompanyController]).run(function ($log) {
        $log.info("CompanyController initialized");
    });
}(gst.controllers || {}));