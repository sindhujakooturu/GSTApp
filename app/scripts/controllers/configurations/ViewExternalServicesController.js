/**
 * Created by 27 on 05-08-2015.
 */
(function (module) {
	gst.controllers = _.extend(module, {
        ViewExternalServicesController: function ($scope, resourceFactory, $routeParams, location) {
            $scope.Configs = [];
            $scope.externalServicesType = $routeParams.externalServicesType;
            //$scope.name = $routeParams.name;
            resourceFactory.externalServicesResource.get({id: $scope.externalServicesType}, function (data) {
                for (var i in data) {
                    if(data[i] != null && data[i].name != null) {
                        data[i].name.replace(/ /g, '');
                        if (!angular.equals(data[i].name, "")) {
                            $scope.Configs.push(data[i]);

                        }
                    }
                }
            });

            $scope.cancel = function () {
                location.path('/externalservices');
            };

        }

    });
	gst.ng.application.controller('ViewExternalServicesController', ['$scope', 'ResourceFactory', '$routeParams', '$location', gst.controllers.ViewExternalServicesController]).run(function ($log) {
        $log.info("ViewExternalServicesController initialized");
    });

}(gst.controllers || {}));
