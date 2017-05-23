(function (module) {
	gst.controllers = _.extend(module, {
        ChargeController: function (scope, resourceFactory, location) {
            scope.charges = [];

            scope.routeTo = function (id) {
                location.path('/viewcharge/' + id);
            };

            if (!scope.searchCriteria.charges) {
                scope.searchCriteria.charges = null;
                scope.saveSC();
            }
            scope.filterText = scope.searchCriteria.charges;

            scope.onFilter = function () {
                scope.searchCriteria.charges = scope.filterText;
                scope.saveSC();
            };

            scope.$broadcast('ChargeDataLoadingStartEvent');
            resourceFactory.chargeResource.getAllCharges(function (data) {
                scope.charges = data;
                scope.$broadcast('ChargeDataLoadingCompleteEvent');
            });
        }
    });
	gst.ng.application.controller('ChargeController', ['$scope', 'ResourceFactory', '$location', gst.controllers.ChargeController]).run(function ($log) {
        $log.info("ChargeController initialized");
    });
}(gst.controllers || {}));