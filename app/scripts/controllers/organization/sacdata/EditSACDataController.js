(function (module) {
	gst.controllers = _.extend(module, {
		EditSACDataController: function (scope, routeParams, resourceFactory, location) {
			scope.sacdata = [];
			
			scope.formData = {};
			
            resourceFactory.sacdataResource.getId({sacdataId: routeParams.id}, function (data) {
                
                scope.sacdataId = data.id;
                
                scope.formData = {
                		sacSeqId: data.sacSeqId,
                		serviceName: data.serviceName,
                		description: data.description,
                		sacTaxCollection: data.sacTaxCollection,
                		sacOtherReciept: data.sacOtherReciept,
                		sacDeductRefund: data.sacDeductRefund,
                		sacPenalty: data.sacPenalty
                };

            });

            scope.submit = function () {
                
                resourceFactory.sacdataResource.update({'sacdataId': routeParams.id}, this.formData, function (data) {
                   console.log(data);
                	location.path('/viewsacdata/' + routeParams.id);
                });
            };
			
		/*	scope.sacdata = [];
			scope.formData = {};
            
            	resourceFactory.sacdataResource.getId({sacdataId: routeParams.id}, function (data) {
            		
                     scope.sacdataId = data.id;
                
                     scope.formData = data;
                
                
            });

            scope.submit = function () {
            	
            	
                delete this.formData.id;
                
                resourceFactory.sacdataResource.update({'sacdataId': routeParams.id}, this.formData, function (data) {
                    location.path('/viewsacdata/' + data.id);
                });
            };*/
        }
    });
	gst.ng.application.controller('EditSACDataController', ['$scope', '$routeParams', 'ResourceFactory', '$location', gst.controllers.EditSACDataController]).run(function ($log) {
        $log.info("EditSACDataController initialized");
    });
}(gst.controllers || {}));
