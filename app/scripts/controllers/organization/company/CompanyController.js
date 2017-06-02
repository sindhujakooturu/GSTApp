(function (module) {
	gst.controllers = _.extend(module, {
		CompanyController: function (scope, resourceFactory, location) {
           scope.company = {};
           
           scope.routeTo = function (id) {
                location.path('/viewcompany/' + id);
            };

            /*if (!scope.searchCriteria.employees) {
                scope.searchCriteria.employees = null;
                scope.saveSC();
            }
            scope.filterText = scope.searchCriteria.employees;

            scope.onFilter = function () {
                scope.searchCriteria.employees = scope.filterText;
                scope.saveSC();
            };*/

            resourceFactory.companyResource.get(function (data) {
                scope.company = data;
            });
        }
    });
	gst.ng.application.controller('CompanyController', ['$scope', 'ResourceFactory', '$location', gst.controllers.CompanyController]).run(function ($log) {
        $log.info("CompanyController initialized");
    });
}(gst.controllers || {}));