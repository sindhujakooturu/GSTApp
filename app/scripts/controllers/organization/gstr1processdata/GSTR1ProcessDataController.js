(function (module) {
	gst.controllers = _.extend(module, {
		GSTR1ProcessDataController: function (scope, resourceFactory, location,route) {
           
			scope.gstr1processdata = {};
	        scope.formData={};
	           
	        scope.routeTo = function (id) {
	                location.path('/viewgstr1processdata/' + id);
	        };

	           
	        resourceFactory.gstr1fileinvoiceResource.get(function (data) {
	                scope.gstr1processdata = data;
	         });
	            
	            
	        scope.action = function (action,gstr1FileInvId){
	            scope.formData.action = action;
	            	resourceFactory.gstr1fileinvoiceStatusUpdateResource.update({id: gstr1FileInvId},scope.formData, function (data) {
	            		route.reload();
	                });
	            	
	           }
			
        }
    });
	gst.ng.application.controller('GSTR1ProcessDataController', ['$scope', 'ResourceFactory', '$location','$route', gst.controllers.GSTR1ProcessDataController]).run(function ($log) {
        $log.info("GSTR1ProcessDataController initialized");
    });
}(gst.controllers || {}));