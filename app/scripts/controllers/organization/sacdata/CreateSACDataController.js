(function (module) {
	gst.controllers = _.extend(module, {
		CreateSACDataController: function (scope, resourceFactory, location, dateFilter) {
			 scope.formData = {};
	            
	            scope.submit = function () {
	            	
	                resourceFactory.sacdataResource.save(this.formData, function (data) {
	                    location.path('/sacdata/');
	                });
	            };
        }
    });
	gst.ng.application.controller('CreateSACDataController', ['$scope', 'ResourceFactory', '$location', 'dateFilter', gst.controllers.CreateSACDataController]).run(function ($log) {
        $log.info("CreateSACDataController initialized");
    });
}(gst.controllers || {}));
