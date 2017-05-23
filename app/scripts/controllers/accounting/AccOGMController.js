(function (module) {
	gst.controllers = _.extend(module, {
        AccOGMController: function (scope, resourceFactory, paginatorService,routeParams, location,$modal) {
            scope.routeTo = function (id) {
                location.path('/viewofficeglmapping/' + id);
            };

            var fetchFunction = function () {
                var params = {};
                resourceFactory.officeToGLAccountMappingResource.search(params, callback);
            };

            scope.mappingDatas =  paginatorService.paginate();

        }
    });
	gst.ng.application.controller('AccOGMController', ['$scope', 'ResourceFactory',  'PaginatorService', '$routeParams','$location','$modal', gst.controllers.AccOGMController]).run(function ($log) {
        $log.info("AccOGMController initialized");
    });
}(gst.controllers || {}));