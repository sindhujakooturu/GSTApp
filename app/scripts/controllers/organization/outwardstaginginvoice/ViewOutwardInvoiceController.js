(function (module) {
	gst.controllers = _.extend(module, {
		ViewOutwardInvoiceController: function (scope, routeParams, resourceFactory) {
            /*scope.employee = [];
            resourceFactory.employeeResource.get({staffId: routeParams.id}, function (data) {
                scope.employee = data;
            });*/
        }
    });
	gst.ng.application.controller('ViewOutwardInvoiceController', ['$scope', '$routeParams', 'ResourceFactory', gst.controllers.ViewOutwardInvoiceController]).run(function ($log) {
        $log.info("ViewOutwardInvoiceController initialized");
    });
}(gst.controllers || {}));
