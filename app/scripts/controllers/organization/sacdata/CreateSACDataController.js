(function (module) {
	gst.controllers = _.extend(module, {
		CreateSACDataController: function (scope, resourceFactory, location, dateFilter) {
            /*scope.offices = [];
            scope.restrictDate = new Date();
            resourceFactory.officeResource.getAllOfficesInAlphabeticalOrder(function (data) {
                scope.offices = data;
                scope.formData = {
                    isLoanOfficer: true,
                    officeId: scope.offices[0].id,
                };
            });

            scope.submit = function () {
                this.formData.locale = scope.optlang.code;
                var joiningDate = dateFilter(scope.formData.joiningDate, scope.df);
                this.formData.dateFormat = scope.df;
                this.formData.joiningDate = joiningDate;
                resourceFactory.employeeResource.save(this.formData, function (data) {
                    location.path('/viewemployee/' + data.resourceId);
                });
            };*/
        }
    });
	gst.ng.application.controller('CreateSACDataController', ['$scope', 'ResourceFactory', '$location', 'dateFilter', gst.controllers.CreateSACDataController]).run(function ($log) {
        $log.info("CreateSACDataController initialized");
    });
}(gst.controllers || {}));
