(function (module) {
	gst.controllers = _.extend(module, {
		ViewGSTR1ProcessDataController: function (scope, routeParams, resourceFactory) {
			
        }
    });
	gst.ng.application.controller('ViewGSTR1ProcessDataController', ['$scope', '$routeParams', 'ResourceFactory', gst.controllers.ViewGSTR1ProcessDataController]).run(function ($log) {
        $log.info("ViewGSTR1ProcessDataController initialized");
    });
}(gst.controllers || {}));