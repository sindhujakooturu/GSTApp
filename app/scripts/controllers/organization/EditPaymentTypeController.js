(function (module) {
	gst.controllers = _.extend(module, {
        EditPaymentTypeController: function (scope, routeParams, resourceFactory, location, $modal, route) {
/*
            scope.formData = {};*/

            resourceFactory.paymentTypeResource.get({paymentTypeId: routeParams.id}, function (data) {
                scope.formData = {
                    name: data.name,
                    description: data.description,
                    isCashPayment: data.isCashPayment,
                    position : data.position
                };
            });

            scope.submit = function () {
                this.formData.isCashPayment = this.formData.isCashPayment || false;
                resourceFactory.paymentTypeResource.update({paymentTypeId: routeParams.id},this.formData, function (data) {
                    location.path('/viewpaymenttype/');
                });
            };

        }
    });
	gst.ng.application.controller('EditPaymentTypeController', ['$scope', '$routeParams', 'ResourceFactory', '$location', '$modal', '$route', gst.controllers.EditPaymentTypeController]).run(function ($log) {
        $log.info("EditPaymentTypeController initialized");
    });
}(gst.controllers || {}));
