(function (module) {
	gst.controllers = _.extend(module, {
        CodeController: function (scope, resourceFactory, location) {
            scope.codes = [];

            scope.routeTo = function (id) {
                location.path('/viewcode/' + id);
            }

            if (!scope.searchCriteria.codes) {
                scope.searchCriteria.codes = null;
                scope.saveSC();
            }
            scope.filterText = scope.searchCriteria.codes;

            scope.onFilter = function () {
                scope.searchCriteria.codes = scope.filterText;
                scope.saveSC();
            };

            resourceFactory.codeResources.getAllCodes(function (data) {
                scope.codes = data;
            });
        }
    });
	gst.ng.application.controller('CodeController', ['$scope', 'ResourceFactory', '$location', gst.controllers.CodeController]).run(function ($log) {
        $log.info("CodeController initialized");
    });
}(gst.controllers || {}));