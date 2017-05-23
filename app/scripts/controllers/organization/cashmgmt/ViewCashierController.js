(function (module) {
	gst.controllers = _.extend(module, {
        ViewCashierController: function (scope, routeParams, route, location, resourceFactory) {
            resourceFactory.tellerCashierResource.getCashier({tellerId: routeParams.tellerId, cashierId:routeParams.cashierId}, function (data) {
                scope.cashier = data;
            });
        }

    });

	gst.ng.application.controller('ViewCashierController', ['$scope', '$routeParams', '$route', '$location', 'ResourceFactory', gst.controllers.ViewCashierController]).run(function ($log) {
        $log.info("ViewCashierController initialized");
    });
}(gst.controllers || {}));
