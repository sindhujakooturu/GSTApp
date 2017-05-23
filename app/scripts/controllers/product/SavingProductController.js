(function (module) {
	gst.controllers = _.extend(module, {
        SavingProductController: function (scope, resourceFactory, location) {
            scope.products = [];

            scope.routeTo = function (id) {
                location.path('/viewsavingproduct/' + id);
            };

            if (!scope.searchCriteria.savingP) {
                scope.searchCriteria.savingP = null;
                scope.saveSC();
            }
            scope.filterText = scope.searchCriteria.savingP;

            scope.onFilter = function () {
                scope.searchCriteria.savingP = scope.filterText;
                scope.saveSC();
            };

            resourceFactory.savingProductResource.getAllSavingProducts(function (data) {
                scope.savingproducts = data;
            });
        }
    });
	gst.ng.application.controller('SavingProductController', ['$scope', 'ResourceFactory', '$location', gst.controllers.SavingProductController]).run(function ($log) {
        $log.info("SavingProductController initialized");
    });
}(gst.controllers || {}));