(function (module) {
	gst.controllers = _.extend(module, {
		EditGSTR1ProcessDataController: function (scope, routeParams, resourceFactory, location, dateFilter) {
            
        }
    });
	gst.ng.application.controller('EditGSTR1ProcessDataController', ['$scope', '$routeParams', 'ResourceFactory', '$location', 'dateFilter', gst.controllers.EditGSTR1ProcessDataController]).run(function ($log) {
        $log.info("EditGSTR1ProcessDataController initialized");
    });
}(gst.controllers || {}));