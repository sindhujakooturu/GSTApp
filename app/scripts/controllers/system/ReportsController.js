(function (module) {
	gst.controllers = _.extend(module, {
        ReportsController: function (scope, resourceFactory, location) {
            scope.reports = [];

            scope.routeTo = function (id) {
                location.path('/system/viewreport/' + id);
            };

            if (!scope.searchCriteria.manrep) {
                scope.searchCriteria.manrep = null;
                scope.saveSC();
            }
            scope.filterText = scope.searchCriteria.manrep;

            scope.onFilter = function () {
                scope.searchCriteria.manrep = scope.filterText;
                scope.saveSC();
            }

            resourceFactory.reportsResource.getReport(function (data) {
                scope.reports = data;
            });
        }
    });
	gst.ng.application.controller('ReportsController', ['$scope', 'ResourceFactory', '$location', gst.controllers.ReportsController]).run(function ($log) {
        $log.info("ReportsController initialized");
    });
}(gst.controllers || {}));