(function (module) {
	gst.controllers = _.extend(module, {
		CreateTestGSTController: function (scope, resourceFactory, location, dateFilter) {
			scope.formData = {};
			scope.column5 = new Date();
            scope.column9 = new Date();
			
			scope.submit = function () {
            	
				if (scope.column5) {
                    reqDate = dateFilter(scope.column5, scope.df);
                    this.formData.column5 = reqDate;
                }

                if (scope.column9) {
                    this.formData.column9 = dateFilter(scope.column9, scope.df);
                }
                scope.formData.dateFormat = scope.df;
                scope.formData.locale = 'en';
                resourceFactory.testPostResource.save(this.formData, function (data) {
                    location.path('/testgst');
                });
            };
            
        }
    });
	gst.ng.application.controller('CreateTestGSTController', ['$scope', 'ResourceFactory', '$location', 'dateFilter', gst.controllers.CreateTestGSTController]).run(function ($log) {
        $log.info("CreateTestGSTController initialized");
    });
}(gst.controllers || {}));