(function (module) {
	gst.controllers = _.extend(module, {
		CreateTestGSTController: function (scope, resourceFactory, location) {
            
        }
    });
	gst.ng.application.controller('CreateTestGSTController', ['$scope', 'ResourceFactory', '$location', gst.controllers.CreateTestGSTController]).run(function ($log) {
        $log.info("CreateTestGSTController initialized");
    });
}(gst.controllers || {}));