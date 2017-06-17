(function (module) {
	gst.controllers = _.extend(module, {
		ViewSACDataController: function (scope, routeParams, resourceFactory) {
            scope.sacdata = {};
            resourceFactory.sacdataResource.getId({sacdataId: routeParams.id}, function (data) {
                scope.sacdata = data;
            });
        }
    });
	gst.ng.application.controller('ViewSACDataController', ['$scope', '$routeParams', 'ResourceFactory', gst.controllers.ViewSACDataController]).run(function ($log) {
        $log.info("ViewSACDataController initialized");
    });
}(gst.controllers || {}));
