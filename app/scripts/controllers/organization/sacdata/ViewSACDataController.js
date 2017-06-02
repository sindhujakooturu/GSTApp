(function (module) {
	gst.controllers = _.extend(module, {
		ViewSACDataController: function (scope, routeParams, resourceFactory) {
            /*scope.employee = [];
            resourceFactory.employeeResource.get({staffId: routeParams.id}, function (data) {
                scope.employee = data;
            });*/
        }
    });
	gst.ng.application.controller('ViewSACDataController', ['$scope', '$routeParams', 'ResourceFactory', gst.controllers.ViewSACDataController]).run(function ($log) {
        $log.info("ViewSACDataController initialized");
    });
}(gst.controllers || {}));
