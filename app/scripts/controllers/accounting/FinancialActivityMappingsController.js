(function (module) {
	gst.controllers = _.extend(module, {
        FinancialActivityMappingsController: function (scope, resourceFactory, location) {

            resourceFactory.officeToGLAccountMappingResource.getAll(function (data) {
                scope.mappings = data;
            });

            scope.routeTo = function (resourceId){
                location.path('/viewfinancialactivitymapping/' + resourceId);
            };
        }
    });
	gst.ng.application.controller('FinancialActivityMappingsController', ['$scope', 'ResourceFactory', '$location', gst.controllers.FinancialActivityMappingsController]).run(function ($log) {
        $log.info("FinancialActivityMappingsController initialized");
    });
}(gst.controllers || {}));
