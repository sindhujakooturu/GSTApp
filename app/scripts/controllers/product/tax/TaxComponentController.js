(function (module) {
	gst.controllers = _.extend(module, {
        TaxComponentController: function (scope, resourceFactory, location) {
            scope.taxcomponents = [];

            scope.routeTo = function (id) {
                location.path('/viewtaxcomponent/' + id);
            };


            resourceFactory.taxcomponent.getAll(function (data) {
                scope.taxcomponents = data;
            });
        }
    });
	gst.ng.application.controller('TaxComponentController', ['$scope', 'ResourceFactory', '$location', gst.controllers.TaxComponentController]).run(function ($log) {
        $log.info("TaxComponentController initialized");
    });
}(gst.controllers || {}));