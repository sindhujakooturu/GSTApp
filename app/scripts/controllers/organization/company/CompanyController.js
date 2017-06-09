(function (module) {
	gst.controllers = _.extend(module, {
		CompanyController: function (scope, resourceFactory, location) {
           scope.company = {};
           
           scope.routeTo = function (id) {
                location.path('/viewcompany/' + id);
            };


            resourceFactory.companyResource.get(function (data) {
                scope.company = data;
            });
        }
    });
	gst.ng.application.controller('CompanyController', ['$scope', 'ResourceFactory', '$location', gst.controllers.CompanyController]).run(function ($log) {
        $log.info("CompanyController initialized");
    });
}(gst.controllers || {}));