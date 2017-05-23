(function (module) {
	gst.controllers = _.extend(module, {
        CreateRoleController: function (scope, location, resourceFactory) {
            scope.formData = {};
            scope.submit = function () {
                resourceFactory.roleResource.save(this.formData, function (data) {
                    location.path("/admin/viewrole/" + data.resourceId);
                });
            };
        }
    });
	gst.ng.application.controller('CreateRoleController', ['$scope', '$location', 'ResourceFactory', gst.controllers.CreateRoleController]).run(function ($log) {
        $log.info("CreateRoleController initialized");
    });
}(gst.controllers || {}));