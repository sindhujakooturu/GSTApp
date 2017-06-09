(function (module) {
	gst.controllers = _.extend(module, {
		ViewOutwardInvoiceController: function (scope, routeParams, resourceFactory) {
            scope.outwardinv = [];
            resourceFactory.outwardinvResource.getall({outwardinvId: routeParams.id}, function (data) {
                scope.outwardinv = data;
            });
        }
    });
	gst.ng.application.controller('ViewOutwardInvoiceController', ['$scope', '$routeParams', 'ResourceFactory', gst.controllers.ViewOutwardInvoiceController]).run(function ($log) {
        $log.info("ViewOutwardInvoiceController initialized");
    });
}(gst.controllers || {}));