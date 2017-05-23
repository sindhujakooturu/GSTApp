(function (module) {
	gst.controllers = _.extend(module, {
        ViewAllProvisoningCriteriaController: function (scope, resourceFactory, location, dateFilter, translate) {
            scope.template = [];
            scope.formData = {};
            scope.first = {};
            scope.isCollapsed = true;
            scope.showdatefield = false;
            scope.repeatEvery = false;
            scope.first.date = new Date();
            scope.translate = translate;
            scope.criterias = [];

            scope.routeTo = function (id) {
                location.path('/viewprovisioningcriteria/' + id);
            };

            if (!scope.searchCriteria.criterias) {
                scope.searchCriteria.criterias = null;
                scope.saveSC();
            }
            scope.filterText = scope.searchCriteria.criterias;

            scope.onFilter = function () {
                scope.searchCriteria.criterias = scope.filterText;
                scope.saveSC();
            };
            resourceFactory.provisioningcriteria.getAll(function (data) {
                scope.criterias = data;
            });
        }
    });
	gst.ng.application.controller('ViewAllProvisoningCriteriaController', ['$scope', 'ResourceFactory', '$location', 'dateFilter', '$translate', gst.controllers.ViewAllProvisoningCriteriaController]).run(function ($log) {
        $log.info("ViewAllProvisoningCriteriaController initialized");
    });
}(gst.controllers || {}));
