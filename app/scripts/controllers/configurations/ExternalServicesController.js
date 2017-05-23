/**
 * Created by 27 on 03-08-2015.
 */
(function (module) {
	gst.controllers = _.extend(module, {
        ExternalServicesController: function (scope, resourceFactory, location, route) {
            scope.S3Configs = [];
            scope.SMTPConfigs = [];
            resourceFactory.externalServicesS3Resource.get(function (data) {
                for (var i in data) {
                    if(data[i] != null && data[i].name != null) {
                        data[i].name.replace(/ /g, '');
                        if (!angular.equals(data[i].name, "")) {
                            data[i].showEditvalue = true;
                            scope.S3Configs.push(data[i])
                        }
                    }
                }
            });
            resourceFactory.externalServicesSMTPResource.get(function (data) {
                for (var i in data) {
                    if(data[i].name.trim() != "") {
                        data[i].showEditvalue = true;
                        scope.SMTPConfigs.push(data[i])
                    }
                }
            });
        }

    });
	gst.ng.application.controller('ExternalServicesController', ['$scope', 'ResourceFactory', '$location', '$route',
		gst.controllers.ExternalServicesController]).run(function ($log){
        $log.info("ExternalServicesController initialized");
    });


}(gst.controllers || {}));
