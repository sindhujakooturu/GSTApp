(function (module) {
	gst.controllers = _.extend(module, {
		ViewGSTR1ProcessDataController: function (scope, routeParams, resourceFactory) {
			
			scope.gstr1processdata = {};
            resourceFactory.gstr1fileinvoiceResource.getid({gstr1InvId: routeParams.id}, function (data) {
                scope.gstr1processdata = data;
                
            });
        }
    });
	gst.ng.application.controller('ViewGSTR1ProcessDataController', ['$scope', '$routeParams', 'ResourceFactory', gst.controllers.ViewGSTR1ProcessDataController]).run(function ($log) {
        $log.info("ViewGSTR1ProcessDataController initialized");
    });
}(gst.controllers || {}));