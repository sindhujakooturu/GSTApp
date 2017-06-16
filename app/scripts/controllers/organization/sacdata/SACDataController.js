(function (module) {
	gst.controllers = _.extend(module, {
		SACDataController: function (scope, resourceFactory, location) {
			scope.sacdata = {};
            scope.routeTo = function (id) {
                location.path('/viewsacdata/' + id);
            };

            resourceFactory.sacdataResource.getAll(function (data) {
                scope.sacdata = data;
            });
        }
    });
	gst.ng.application.controller('SACDataController', ['$scope', 'ResourceFactory', '$location', gst.controllers.SACDataController]).run(function ($log) {
        $log.info("SACDataController initialized");
    });
}(gst.controllers || {}));