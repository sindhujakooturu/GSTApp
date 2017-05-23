(function (module) {
	gst.controllers = _.extend(module, {
        LoanProductController: function (scope, resourceFactory, location) {
            scope.products = [];

            scope.routeTo = function (id) {
                location.path('/viewloanproduct/' + id);
            };

            if (!scope.searchCriteria.loanP) {
                scope.searchCriteria.loanP = null;
                scope.saveSC();
            }
            scope.filterText = scope.searchCriteria.loanP;

            scope.onFilter = function () {
                scope.searchCriteria.loanP = scope.filterText;
                scope.saveSC();
            };

            scope.$broadcast('LoanProductDataLoadingStartEvent');
            resourceFactory.loanProductResource.getAllLoanProducts(function (data) {
                scope.loanproducts = data;
                scope.$broadcast('LoanProductDataLoadingCompleteEvent');
            });
        }
    });
	gst.ng.application.controller('LoanProductController', ['$scope', 'ResourceFactory', '$location', gst.controllers.LoanProductController]).run(function ($log) {
        $log.info("LoanProductController initialized");
    });
}(gst.controllers || {}));