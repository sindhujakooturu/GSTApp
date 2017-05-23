(function (module) {
	gst.controllers = _.extend(module, {
        TemplateController: function (scope, resourceFactory, location) {
            scope.routeTo = function (id) {
                location.path('/viewtemplate/' + id);
            };

            if (!scope.searchCriteria.templates) {
                scope.searchCriteria.templates = null;
                scope.saveSC();
            }
            scope.filterText = scope.searchCriteria.templates;

            scope.onFilter = function () {
                scope.searchCriteria.templates = scope.filterText;
                scope.saveSC();
            };

            resourceFactory.templateResource.get(function (data) {
                scope.templates = data;
            });
        }
    });
	gst.ng.application.controller('TemplateController', ['$scope', 'ResourceFactory', '$location', gst.controllers.TemplateController]).run(function ($log) {
        $log.info("TemplateController initialized");
    });
}(gst.controllers || {}));