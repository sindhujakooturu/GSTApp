(function (module) {
	gst.controllers = _.extend(module, {
        ViewFinancialActivityController: function (scope, resourceFactory, routeParams, location, $modal) {
            resourceFactory.officeToGLAccountMappingResource.get({mappingId: routeParams.mappingId},function (data) {
                scope.mapping = data;
            });

            scope.deletemapping = function () {
                $modal.open({
                    templateUrl: 'deletemapping.html',
                    controller: AccRuleDeleteCtrl
                });
            };
            var AccRuleDeleteCtrl = function ($scope, $modalInstance) {
                $scope.delete = function () {
                    resourceFactory.officeToGLAccountMappingResource.delete({mappingId: routeParams.mappingId}, {}, function (data) {
                        $modalInstance.close('delete');
                        location.path('/financialactivityaccountmappings');
                    });
                };
                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };
            };
        }
    });
	gst.ng.application.controller('ViewFinancialActivityController', ['$scope', 'ResourceFactory', '$routeParams', '$location', '$modal', gst.controllers.ViewFinancialActivityController]).run(function ($log) {
        $log.info("ViewFinancialActivityController initialized");
    });
}(gst.controllers || {}));
