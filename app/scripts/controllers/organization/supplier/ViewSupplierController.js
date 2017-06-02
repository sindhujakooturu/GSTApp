(function (module) {
	gst.controllers = _.extend(module, {
        ViewSupplierController: function (scope, routeParams, resourceFactory) {
            /*scope.employee = [];
            resourceFactory.employeeResource.get({staffId: routeParams.id}, function (data) {
                scope.employee = data;
            });*/
        }
    });
	gst.ng.application.controller('ViewSupplierController', ['$scope', '$routeParams', 'ResourceFactory', gst.controllers.ViewSupplierController]).run(function ($log) {
        $log.info("ViewSupplierController initialized");
    });
}(gst.controllers || {}));
