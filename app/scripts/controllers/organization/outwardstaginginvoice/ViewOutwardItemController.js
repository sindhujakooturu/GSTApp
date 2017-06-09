(function (module) {
	gst.controllers = _.extend(module, {
		ViewOutwardItemController: function (scope, routeParams, resourceFactory) {
			
            scope.outwarditem = [];
            
            resourceFactory.outwarditemResource.getall({outwarditemId: routeParams.id}, function (data) {
                scope.outwarditem = data;
            });
        }
    });
	gst.ng.application.controller('ViewOutwardItemController', ['$scope', '$routeParams', 'ResourceFactory', gst.controllers.ViewOutwardItemController]).run(function ($log) {
        $log.info("ViewOutwardItemController initialized");
    });
}(gst.controllers || {}));