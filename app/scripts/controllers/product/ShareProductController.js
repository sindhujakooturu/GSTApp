(function (module) {
	gst.controllers = _.extend(module, {
        ShareProductController: function (scope, paginatorService, resourceFactory, location) {
            scope.shareproducts = [];

            scope.routeTo = function (id) {
                location.path('/viewshareproduct/' + id);
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

            var fetchFunction = function (offset, limit, callback) {
                var params = {};
                params.offset = offset;
                params.limit = limit;
                params.locale = scope.optlang.code;
                params.dateFormat = scope.df;
                scope.saveSC();
                resourceFactory.shareProduct.getAll(params, callback) ;
            };

            paginatorService.currentOffset = 0 ;
            scope.shareproducts = paginatorService.paginate(fetchFunction, 10);
        }
    });
	gst.ng.application.controller('ShareProductController', ['$scope', 'PaginatorService', 'ResourceFactory', '$location', gst.controllers.ShareProductController]).run(function ($log) {
        $log.info("ShareProductController initialized");
    });
}(gst.controllers || {}));