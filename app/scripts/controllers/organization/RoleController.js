(function (module) {
	gst.controllers = _.extend(module, {
        RoleController: function (scope, resourceFactory, location) {
            scope.roles = [];
            scope.routeTo = function (id) {
                location.path('/admin/viewrole/' + id);
            };
            resourceFactory.roleResource.getAllRoles({}, function (data) {
                scope.roles = data;
            });

            scope.isRoleEnable = function(value) {
                return value;
            };
        }
    });
	gst.ng.application.controller('RoleController', ['$scope', 'ResourceFactory', '$location', gst.controllers.RoleController]).run(function ($log) {
        $log.info("RoleController initialized");
    });
}(gst.controllers || {}));
