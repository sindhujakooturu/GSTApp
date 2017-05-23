(function (module) {
	gst.controllers = _.extend(module, {
        ProductMixController: function (scope, resourceFactory, location) {
            scope.productmixes = [];
            scope.routeTo = function (id) {
                location.path('/viewproductmix/' + id);
            };
            resourceFactory.loanProductResource.getAllLoanProducts({associations: 'productMixes'}, function (data) {
                scope.productmixes = data;
            });
        }
    });
	gst.ng.application.controller('ProductMixController', ['$scope', 'ResourceFactory', '$location', gst.controllers.ProductMixController]).run(function ($log) {
        $log.info("ProductMixController initialized");
    });
}(gst.controllers || {}));
