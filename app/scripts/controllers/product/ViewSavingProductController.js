(function (module) {
	gst.controllers = _.extend(module, {
        ViewSavingProductController: function (scope, routeParams, location, anchorScroll, resourceFactory) {
            resourceFactory.savingProductResource.get({savingProductId: routeParams.id, template: 'true'}, function (data) {
                scope.savingproduct = data;
                scope.hasAccounting = data.accountingRule.id == 2 ? true : false;
            });

            scope.scrollto = function (link) {
                location.hash(link);
                anchorScroll();

            };
        }
    });
	gst.ng.application.controller('ViewSavingProductController', ['$scope', '$routeParams', '$location', '$anchorScroll' , 'ResourceFactory', gst.controllers.ViewSavingProductController]).run(function ($log) {
        $log.info("ViewSavingProductController initialized");
    });
}(gst.controllers || {}));
