(function (module) {
	gst.controllers = _.extend(module, {
		GSTR1ProcessDataController: function (scope, resourceFactory, location) {
           
			scope.gstr1processdata = {};
	           
	           scope.routeTo = function (id) {
	                location.path('/viewgstr1processdata/' + id);
	            };


	            resourceFactory.gstr1fileinvoiceResource.get(function (data) {
	                scope.gstr1processdata = data;
	            });
			
        }
    });
	gst.ng.application.controller('GSTR1ProcessDataController', ['$scope', 'ResourceFactory', '$location', gst.controllers.GSTR1ProcessDataController]).run(function ($log) {
        $log.info("GSTR1ProcessDataController initialized");
    });
}(gst.controllers || {}));