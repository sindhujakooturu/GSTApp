(function (module) {
	gst.controllers = _.extend(module, {
        ViewAccountTransferDetailsController: function (scope, resourceFactory, location, routeParams) {

            resourceFactory.accountTransferResource.get({transferId: routeParams.id}, function (data) {
                scope.transferData = data;
            });
        }
    });
	gst.ng.application.controller('ViewAccountTransferDetailsController', ['$scope', 'ResourceFactory', '$location', '$routeParams', gst.controllers.ViewAccountTransferDetailsController]).run(function ($log) {
        $log.info("ViewAccountTransferDetailsController initialized");
    });
}(gst.controllers || {}));
