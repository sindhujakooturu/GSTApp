(function (module) {
	gst.controllers = _.extend(module, {
		ViewCompanyController: function (scope, routeParams, resourceFactory) {
			
            scope.company = [];
            
            resourceFactory.companyResource.get({companyId: routeParams.id}, function (data) {
                scope.company = data;
            });
        }
    });
	gst.ng.application.controller('ViewCompanyController', ['$scope', '$routeParams', 'ResourceFactory', gst.controllers.ViewCompanyController]).run(function ($log) {
        $log.info("ViewCompanyController initialized");
    });
}(gst.controllers || {}));
