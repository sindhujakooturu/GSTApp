(function (module) {
	gst.controllers = _.extend(module, {
		SupplierController: function (scope, resourceFactory, location) {
			scope.supplier = {};
            scope.routeTo = function (id) {
                location.path('/viewsupplier/' + id);
            };

            resourceFactory.supplierResource.get(function (data) {
                scope.supplier = data;
            });
        }
    });
	gst.ng.application.controller('SupplierController', ['$scope', 'ResourceFactory', '$location', gst.controllers.SupplierController]).run(function ($log) {
        $log.info("SupplierController initialized");
    });
}(gst.controllers || {}));