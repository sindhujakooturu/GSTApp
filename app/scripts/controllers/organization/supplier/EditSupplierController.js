(function (module) {
	gst.controllers = _.extend(module, {
        EditSupplierController: function (scope, routeParams, resourceFactory, location, dateFilter) {
        	scope.supplier = [];
			scope.formData = {};
            
            	resourceFactory.supplierResource.getall({supplierId: routeParams.id}, function (data) {
            		
                     scope.supplierId = data.id;
                
                     scope.formData = data;
              
            });

            scope.submit = function () {
            	
                delete this.formData.id;
                
                resourceFactory.supplierResource.update({'supplierId': routeParams.id}, this.formData, function (data) {
                    location.path('/viewsupplier/' + data.resourceId);
                });
            };
        }
    });
	gst.ng.application.controller('EditSupplierController', ['$scope', '$routeParams', 'ResourceFactory', '$location', 'dateFilter', gst.controllers.EditSupplierController]).run(function ($log) {
        $log.info("EditSupplierController initialized");
    });
}(gst.controllers || {}));
