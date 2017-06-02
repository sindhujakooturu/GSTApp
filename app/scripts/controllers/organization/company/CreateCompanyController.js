(function (module) {
	gst.controllers = _.extend(module, {
		CreateCompanyController: function (scope, resourceFactory, location) {
            
            
			scope.formData = {};
            scope.submit = function () {
                /*this.formData.locale = scope.optlang.code;
                var joiningDate = dateFilter(scope.formData.joiningDate, scope.df);
                this.formData.dateFormat = scope.df;
                this.formData.joiningDate = joiningDate;*/
                resourceFactory.companyResource.save(this.formData, function (data) {
                    location.path('/company');
                });
                
            };
        }
    });
	gst.ng.application.controller('CreateCompanyController', ['$scope', 'ResourceFactory', '$location', gst.controllers.CreateCompanyController]).run(function ($log) {
        $log.info("CreateCompanyController initialized");
    });
}(gst.controllers || {}));
