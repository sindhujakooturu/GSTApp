(function (module) {
	gst.controllers = _.extend(module, {
		CreateTestGSTChildController: function (scope, resourceFactory, location) {
            
        }
    });
	gst.ng.application.controller('CreateTestGSTChildController', ['$scope', 'ResourceFactory', '$location', gst.controllers.CreateTestGSTChildController]).run(function ($log) {
        $log.info("CreateTestGSTChildController initialized");
    });
}(gst.controllers || {}));