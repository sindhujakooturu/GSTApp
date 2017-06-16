(function (module) {
	gst.controllers = _.extend(module, {
		CreateCompanyController: function (scope, resourceFactory, location) {
			scope.formData = {};
			
			resourceFactory.officeResource.getAllOffices(function (data) {
				
				scope.offices = angular.copy(data);
				for(var i in scope.offices){
					if(scope.offices[i].name == "Trigital")
						scope.offices.splice(i ,1);
				}
			});
			
            scope.submit = function () {
            	
            	/*$upload.upload({
                    url: $rootScope.hostUrl+ API_VERSION +'/documents', 
                    data: scope.formData,
                    file: scope.file
                  }).then(function(data) {
                    // to fix IE not refreshing the model
                    if (!scope.$$phase) {
                      scope.$apply();
                    }
                    //location.path('/company');
                  });*/
            	
                resourceFactory.companyResource.save(this.formData, function (data) {
                    location.path('/company');
                });
                
            };
            
        }
    });
	gst.ng.application.controller('CreateCompanyController', ['$scope', 'ResourceFactory', '$location', '$upload', '$rootScope', 'API_VERSION',gst.controllers.CreateCompanyController]).run(function ($log) {
        $log.info("CreateCompanyController initialized");
    });
}(gst.controllers || {}));