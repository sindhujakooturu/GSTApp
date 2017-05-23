(function (module) {
	gst.controllers = _.extend(module, {
        TaxGroupController: function (scope, resourceFactory, location) {
            scope.taxgroups = [];

            scope.routeTo = function (id) {
                location.path('/viewtaxgroup/' + id);
            };


            resourceFactory.taxgroup.getAll(function (data) {
                scope.taxgroups = data;
            });
        }
    });
	gst.ng.application.controller('TaxGroupController', ['$scope', 'ResourceFactory', '$location', gst.controllers.TaxGroupController]).run(function ($log) {
        $log.info("TaxGroupController initialized");
    });
}(gst.controllers || {}));