(function (module) {
	gst.controllers = _.extend(module, {
        ViewTaxGroupController: function (scope, resourceFactory, routeParams) {

            resourceFactory.taxgroup.get({taxGroupId: routeParams.taxGroupId, template: 'false'},function (data) {
                scope.taxgroup = data;
            });

        }
    });
	gst.ng.application.controller('ViewTaxGroupController', ['$scope', 'ResourceFactory', '$routeParams',  gst.controllers.ViewTaxGroupController]).run(function ($log) {
        $log.info("ViewTaxGroupController initialized");
    });
}(gst.controllers || {}));
