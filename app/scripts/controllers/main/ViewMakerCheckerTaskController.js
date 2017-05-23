(function (module) {
	gst.controllers = _.extend(module, {
        ViewMakerCheckerTaskController: function (scope, routeParams) {
            scope.commandId = routeParams.commandId;
        }
    });
	gst.ng.application.controller('ViewMakerCheckerTaskController', ['$scope', '$routeParams', gst.controllers.ViewMakerCheckerTaskController]).run(function ($log) {
        $log.info("ViewMakerCheckerTaskController initialized");
    });
}(gst.controllers || {}));


