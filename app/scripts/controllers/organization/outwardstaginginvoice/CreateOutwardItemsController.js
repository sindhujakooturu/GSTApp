(function (module) {
	gst.controllers = _.extend(module, {
		CreateOutwardItemsController: function (scope, resourceFactory, location, dateFilter, routeParams) {
            scope.outwarditem = [];
            
            
            
            scope.submit = function () {
            	
            	delete scope.formData.status;
            	delete scope.formData.errorCode;
            	delete scope.formData.errorDescripter;
            	scope.formData.locale = scope.optlang.code;
            	
            	
                resourceFactory.outwarditemResource.save({invoiceId:routeParams.invoiceId},this.formData, function (data) {
                    location.path('/viewoutwarditem/' + data.resourceId);
                });
            };
        }
    });
	gst.ng.application.controller('CreateOutwardItemsController', ['$scope', 'ResourceFactory', '$location', 'dateFilter', '$routeParams', gst.controllers.CreateOutwardItemsController]).run(function ($log) {
        $log.info("CreateOutwardItemsController initialized");
    });
}(gst.controllers || {}));