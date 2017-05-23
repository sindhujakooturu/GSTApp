(function (module) {
	gst.controllers = _.extend(module, {
        ViewSchedulerJobController: function (scope, routeParams, resourceFactory) {
            resourceFactory.jobsResource.getJobDetails({jobId: routeParams.id}, function (data) {
                scope.job = data;
            });
        }
    });
	gst.ng.application.controller('ViewSchedulerJobController', ['$scope', '$routeParams', 'ResourceFactory', gst.controllers.ViewSchedulerJobController]).run(function ($log) {
        $log.info("ViewSchedulerJobController initialized");
    });
}(gst.controllers || {}));
