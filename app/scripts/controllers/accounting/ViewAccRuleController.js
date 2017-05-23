(function (module) {
	gst.controllers = _.extend(module, {
        ViewAccRuleController: function (scope, resourceFactory, routeParams, location, $modal) {

            resourceFactory.accountingRulesResource.getById({accountingRuleId: routeParams.id}, function (data) {
                scope.rule = data;
            });
            scope.deleteRule = function () {
                $modal.open({
                    templateUrl: 'deleteaccrule.html',
                    controller: AccRuleDeleteCtrl
                });
            };
            var AccRuleDeleteCtrl = function ($scope, $modalInstance) {
                $scope.delete = function () {
                    resourceFactory.accountingRulesResource.delete({accountingRuleId: routeParams.id}, {}, function (data) {
                        $modalInstance.close('delete');
                        location.path('/accounting_rules');
                    });
                };
                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };
            };

        }
    });
	gst.ng.application.controller('ViewAccRuleController', ['$scope', 'ResourceFactory', '$routeParams', '$location', '$modal', gst.controllers.ViewAccRuleController]).run(function ($log) {
        $log.info("ViewAccRuleController initialized");
    });
}(gst.controllers || {}));