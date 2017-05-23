(function (module) {
	gst.controllers = _.extend(module, {
        UserController: function (scope, resourceFactory) {
            scope.users = [];
            scope.newUserFormDialog = function () {
                scope.$broadcast('OpenUserFormDialog', {title: 'New User'});
            };
            resourceFactory.userResource.getAllUsers({fields: "id,firstname,lastname,username,officeName"}, function (data) {
                scope.users = data;
            });
        }
    });
	gst.ng.application.controller('UserController', ['$scope', 'ResourceFactory', gst.controllers.UserController]).run(function ($log) {
        $log.info("UserController initialized");
    });
}(gst.controllers || {}));