(function (module) {
	gst.controllers = _.extend(module, {
        AddCodeController: function (scope, resourceFactory, location) {

            scope.submit = function () {
                resourceFactory.codeResources.save(this.formData, function (data) {
                    location.path('/viewcode/' + data.resourceId);
                });
            };
        }
    });
	gst.ng.application.controller('AddCodeController', ['$scope', 'ResourceFactory', '$location', gst.controllers.AddCodeController]).run(function ($log) {
        $log.info("AddCodeController initialized");
    });
}(gst.controllers || {}));

