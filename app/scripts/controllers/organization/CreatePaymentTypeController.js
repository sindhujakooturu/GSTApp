(function (module) {
	gst.controllers = _.extend(module, {
        CreatePaymentTypeController: function (scope, routeParams, resourceFactory, location, $modal, route) {

            scope.formData = {};
            scope.isCashPayment =true;


            scope.submit = function () {
                this.formData.isCashPayment = this.formData.isCashPayment || false;
                resourceFactory.paymentTypeResource.save(this.formData, function (data) {
                    location.path('/viewpaymenttype/');
                });
            };

        }
    });
	gst.ng.application.controller('CreatePaymentTypeController', ['$scope', '$routeParams', 'ResourceFactory', '$location', '$modal', '$route', gst.controllers.CreatePaymentTypeController]).run(function ($log) {
        $log.info("CreatePaymentTypeController initialized");
    });
}(gst.controllers || {}));
