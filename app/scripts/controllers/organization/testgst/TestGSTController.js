(function (module) {
	gst.controllers = _.extend(module, {
		TestGSTController: function (scope, resourceFactory, location) {
			
			scope.testDatas = {};
			
			 resourceFactory.testPostResource.get(function (data) {
	                scope.testDatas = data;
	            });
			 
			 scope.routeTo = function (id) {
	                location.path('/viewtestgst/' + id);
	            };
        }
    });
	gst.ng.application.controller('TestGSTController', ['$scope', 'ResourceFactory', '$location', gst.controllers.TestGSTController]).run(function ($log) {
        $log.info("TestGSTController initialized");
    });
}(gst.controllers || {}));