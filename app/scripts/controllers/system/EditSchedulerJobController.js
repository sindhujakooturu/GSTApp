(function (module) {
	gst.controllers = _.extend(module, {
        EditSchedulerJobController: function (scope, routeParams, resourceFactory, location) {
            resourceFactory.jobsResource.getJobDetails({jobId: routeParams.id}, function (data) {
                scope.job = data;
                scope.formData = {
                    displayName: data.displayName,
                    cronExpression: data.cronExpression,
                    active: data.active
                }
            });

            scope.cancel = function () {
                location.path('/viewschedulerjob/' + routeParams.id);
            }

            scope.submit = function () {
                resourceFactory.jobsResource.update({jobId: routeParams.id}, this.formData, function (data) {
                    location.path('/viewschedulerjob/' + data.resourceId);
                });
            };
        }
    });
	gst.ng.application.controller('EditSchedulerJobController', ['$scope', '$routeParams', 'ResourceFactory', '$location', gst.controllers.EditSchedulerJobController]).run(function ($log) {
        $log.info("EditSchedulerJobController initialized");
    });
}(gst.controllers || {}));
