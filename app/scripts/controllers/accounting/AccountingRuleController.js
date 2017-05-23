(function (module) {
	gst.controllers = _.extend(module, {
        AccountingRuleController: function (scope, resourceFactory, location) {
            scope.routeTo = function (id) {
                location.path('/viewaccrule/' + id);
            };
            resourceFactory.accountingRulesResource.get(function (data) {
                scope.rules = data;
            });

        }
    });
	gst.ng.application.controller('AccountingRuleController', ['$scope', 'ResourceFactory', '$location', gst.controllers.AccountingRuleController]).run(function ($log) {
        $log.info("AccountingRuleController initialized");
    });
}(gst.controllers || {}));