(function (module) {
	gst.controllers = _.extend(module, {
        ViewTellerController: function (scope, routeParams, route, location, resourceFactory) {
            resourceFactory.tellerResource.get({tellerId: routeParams.id}, function (data) {
                scope.teller = data;
            })
        }

    });
	gst.ng.application.controller('ViewTellerController', ['$scope', '$routeParams', '$route', '$location', 'ResourceFactory', gst.controllers.ViewTellerController]).run(function ($log) {
        $log.info("ViewTellerController initialized");
    });
}(gst.controllers || {}));