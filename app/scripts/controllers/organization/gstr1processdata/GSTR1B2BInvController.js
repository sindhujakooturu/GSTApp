(function (module) {
	gst.controllers = _.extend(module, {
		GSTR1B2BInvController: function (scope, resourceFactory, location) {
           
			/*scope.gstr1b2binv = {};
	           
	           scope.routeTo = function (id) {
	                location.path('/viewgstr1b2binv/' + id);
	            };


	            resourceFactory.gstr1fileinvoiceResource.get(function (data) {
	                scope.gstr1b2binv = data;
	            });*/
			
        }
    });
	gst.ng.application.controller('GSTR1B2BInvController', ['$scope', 'ResourceFactory', '$location', gst.controllers.GSTR1B2BInvController]).run(function ($log) {
        $log.info("GSTR1B2BInvController initialized");
    });
}(gst.controllers || {}));