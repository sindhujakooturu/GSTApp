(function (module) {
	gst.controllers = _.extend(module, {
        ViewShareProductController: function (scope, routeParams, location, anchorScroll, resourceFactory) {
            resourceFactory.shareProduct.get({shareProductId: routeParams.id}, function (data) {
                scope.shareproduct = data;
                scope.hasAccounting = data.accountingRule.id == 2 ? true : false;
            });

            scope.scrollto = function (link) {
                location.hash(link);
                anchorScroll();

            };
        }
    });
	gst.ng.application.controller('ViewShareProductController', ['$scope', '$routeParams', '$location', '$anchorScroll' , 'ResourceFactory', gst.controllers.ViewShareProductController]).run(function ($log) {
        $log.info("ViewShareProductController initialized");
    });
}(gst.controllers || {}));
