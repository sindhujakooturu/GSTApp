(function (module) {
	gst.controllers = _.extend(module, {
		OutwardInvoiceController: function (scope, resourceFactory, location) {
			
			scope.outwardinv = {};
			
			resourceFactory.outwardinvResource.get(function (data) {
                scope.outwards = data;
            });
			
            scope.routeTo = function (id) {
                location.path('/viewoutwardinvoice/' + id);
            };

            /*if (!scope.searchCriteria.employees) {
                scope.searchCriteria.employees = null;
                scope.saveSC();
            }
            scope.filterText = scope.searchCriteria.employees;*/

            /*scope.onFilter = function () {
                scope.searchCriteria.employees = scope.filterText;
                scope.saveSC();
            };*/

            
        }
    });
	gst.ng.application.controller('OutwardInvoiceController', ['$scope', 'ResourceFactory', '$location', gst.controllers.OutwardInvoiceController]).run(function ($log) {
        $log.info("OutwardInvoiceController initialized");
    });
}(gst.controllers || {}));