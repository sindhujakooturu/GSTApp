(function (module) {
	gst.controllers = _.extend(module, {
		ViewGSTR1B2BInvController: function (scope, routeParams, resourceFactory) {
			
			/*scope.gstr1b2binv = {};
            resourceFactory.gstr1fileinvoiceResource.getid({gstr1InvId: routeParams.id}, function (data) {
                scope.gstr1b2binv = data;
                
            });*/
        }
    });
	gst.ng.application.controller('ViewGSTR1B2BInvController', ['$scope', '$routeParams', 'ResourceFactory', gst.controllers.ViewGSTR1B2BInvController]).run(function ($log) {
        $log.info("ViewGSTR1B2BInvController initialized");
    });
}(gst.controllers || {}));