(function (module) {
	gst.controllers = _.extend(module, {
        ViewTaxComponentController: function (scope, resourceFactory, routeParams) {

            resourceFactory.taxcomponent.get({taxComponentId: routeParams.taxComponentId, template: 'true'},function (data) {
                scope.taxComponent = data;
            });

        }
    });
	gst.ng.application.controller('ViewTaxComponentController', ['$scope', 'ResourceFactory', '$routeParams',  gst.controllers.ViewTaxComponentController]).run(function ($log) {
        $log.info("ViewTaxComponentController initialized");
    });
}(gst.controllers || {}));
