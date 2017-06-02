(function (module) {
	gst.controllers = _.extend(module, {
		ViewCompanyController: function (scope, routeParams, resourceFactory) {
            /*scope.employee = [];
            resourceFactory.employeeResource.get({staffId: routeParams.id}, function (data) {
                scope.employee = data;
            });*/
        }
    });
	gst.ng.application.controller('ViewCompanyController', ['$scope', '$routeParams', 'ResourceFactory', gst.controllers.ViewCompanyController]).run(function ($log) {
        $log.info("ViewCompanyController initialized");
    });
}(gst.controllers || {}));
