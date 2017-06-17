(function (module) {
	gst.controllers = _.extend(module, {
		CreateSupplierController: function (scope, resourceFactory, location) {
			scope.supplier = [];
            scope.formData = {};
            scope.submit = function () {
            	
                resourceFactory.supplierResource.save(this.formData, function (data) {
                    location.path('/supplier/');
                });
            };
        }
    });
	gst.ng.application.controller('CreateSupplierController', ['$scope', 'ResourceFactory', '$location', gst.controllers.CreateSupplierController]).run(function ($log) {
        $log.info("CreateSupplierController initialized");
    });
}(gst.controllers || {}));
