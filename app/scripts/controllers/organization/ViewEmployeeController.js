(function (module) {
	gst.controllers = _.extend(module, {
        ViewEmployeeController: function (scope, routeParams, resourceFactory) {
            scope.employee = [];
            resourceFactory.employeeResource.get({staffId: routeParams.id}, function (data) {
                scope.employee = data;
            });
        }
    });
	gst.ng.application.controller('ViewEmployeeController', ['$scope', '$routeParams', 'ResourceFactory', gst.controllers.ViewEmployeeController]).run(function ($log) {
        $log.info("ViewEmployeeController initialized");
    });
}(gst.controllers || {}));
