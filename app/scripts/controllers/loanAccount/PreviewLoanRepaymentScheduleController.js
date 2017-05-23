(function (module) {
	gst.controllers = _.extend(module, {
        PreviewLoanRepaymentScheduleController: function (scope, resourceFactory, routeParams, location, dateFilter) {
            scope.requestId = routeParams.requestId;
            scope.loanId = routeParams.loanId;
            scope.data = {};

            resourceFactory.loanRescheduleResource.preview({scheduleId:scope.requestId}, function (data) {
                scope.data = data;
            });
            scope.reject = function(){
                location.path('/loans/' + scope.loanId + '/rejectreschedulerequest/'+scope.requestId);
            };
            scope.approve = function(){
                location.path('/loans/' + scope.loanId + '/approvereschedulerequest/'+scope.requestId);
            };

            scope.back = function () {
                location.path('/loans/' + scope.loanId + '/viewreschedulerequest/'+scope.requestId);
            };
        }
    });
	gst.ng.application.controller('PreviewLoanRepaymentScheduleController', ['$scope', 'ResourceFactory', '$routeParams', '$location', 'dateFilter', gst.controllers.PreviewLoanRepaymentScheduleController]).run(function ($log) {
        $log.info("PreviewLoanRepaymentScheduleController initialized");
    });
}(gst.controllers || {}));