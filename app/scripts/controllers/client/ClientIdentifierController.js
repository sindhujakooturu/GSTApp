(function (module) {
	gst.controllers = _.extend(module, {
        ClientIdentifierController: function (scope, routeParams, location, resourceFactory) {
            scope.clientId = routeParams.clientId;
            scope.formData = {};
            scope.documenttypes = [];
            scope.statusTypes = [{
                id: 1,
                label: 'Active'
            }, {
                id: 2,
                label: 'Inactive',
            }];
            resourceFactory.clientIdenfierTemplateResource.get({clientId: routeParams.clientId}, function (data) {
                scope.documenttypes = data.allowedDocumentTypes;
                scope.formData.documentTypeId = data.allowedDocumentTypes[0].id;
            });

            scope.submit = function () {
                resourceFactory.clientIdenfierResource.save({clientId: scope.clientId}, this.formData, function (data) {
                    location.path('/viewclient/' + data.clientId);
                });
            };

        }
    });
	gst.ng.application.controller('ClientIdentifierController', ['$scope', '$routeParams', '$location', 'ResourceFactory', gst.controllers.ClientIdentifierController]).run(function ($log) {
        $log.info("ClientIdentifierController initialized");
    });
}(gst.controllers || {}));

