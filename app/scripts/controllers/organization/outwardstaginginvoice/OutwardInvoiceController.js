(function (module) {
	gst.controllers = _.extend(module, {
		OutwardInvoiceController: function (scope, resourceFactory, location) {
			scope.outwardinv = {};
            scope.routeTo = function (id) {
                location.path('/viewoutwardinvoice/' + id);
            };

            resourceFactory.outwardinvResource.get(function (data) {
                scope.outwards = data;
            });
        }
    });
	gst.ng.application.controller('OutwardInvoiceController', ['$scope', 'ResourceFactory', '$location', gst.controllers.OutwardInvoiceController]).run(function ($log) {
        $log.info("OutwardInvoiceController initialized");
    });
}(gst.controllers || {}));