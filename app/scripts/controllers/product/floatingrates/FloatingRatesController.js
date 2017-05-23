(function (module) {
	gst.controllers = _.extend(module, {
        FloatingRatesController: function (scope, resourceFactory, location, dateFilter, translate) {
            scope.floatingrates = [];

            scope.routeTo = function (floatingRateId) {
                location.path('/viewfloatingrate/' + floatingRateId);
            };

            resourceFactory.floatingrates.getAll(function (data) {
                scope.floatingrates = data;
            });
        }
    });
	gst.ng.application.controller('FloatingRatesController', ['$scope', 'ResourceFactory', '$location', 'dateFilter', '$translate', gst.controllers.FloatingRatesController]).run(function ($log) {
        $log.info("FloatingRatesController initialized");
    });
}(gst.controllers || {}));
