(function (module) {
	gst.controllers = _.extend(module, {
		GSTR1ProcessDataController: function (scope, resourceFactory, location) {
           
        }
    });
	gst.ng.application.controller('GSTR1ProcessDataController', ['$scope', 'ResourceFactory', '$location', gst.controllers.GSTR1ProcessDataController]).run(function ($log) {
        $log.info("GSTR1ProcessDataController initialized");
    });
}(gst.controllers || {}));