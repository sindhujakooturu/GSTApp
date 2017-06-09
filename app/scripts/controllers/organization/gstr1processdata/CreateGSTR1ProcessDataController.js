(function (module) {
	gst.controllers = _.extend(module, {
		CreateGSTR1ProcessDataController: function (scope, resourceFactory, location) {
            
        }
    });
	gst.ng.application.controller('CreateGSTR1ProcessDataController', ['$scope', 'ResourceFactory', '$location', gst.controllers.CreateGSTR1ProcessDataController]).run(function ($log) {
        $log.info("CreateGSTR1ProcessDataController initialized");
    });
}(gst.controllers || {}));