(function (module) {
	gst.controllers = _.extend(module, {
        ViewSupplierController: function (scope, routeParams, resourceFactory) {
            scope.supplier = [];
            resourceFactory.supplierResource.getall({supplierId: routeParams.id}, function (data) {
                scope.supplier = data;
            });
        }
    });
	gst.ng.application.controller('ViewSupplierController', ['$scope', '$routeParams', 'ResourceFactory', gst.controllers.ViewSupplierController]).run(function ($log) {
        $log.info("ViewSupplierController initialized");
    });
}(gst.controllers || {}));
