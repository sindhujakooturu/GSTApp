(function (module) {
	gst.controllers = _.extend(module, {
		TestGSTController: function (scope, resourceFactory, location) {
           
        }
    });
	gst.ng.application.controller('TestGSTController', ['$scope', 'ResourceFactory', '$location', gst.controllers.TestGSTController]).run(function ($log) {
        $log.info("TestGSTController initialized");
    });
}(gst.controllers || {}));