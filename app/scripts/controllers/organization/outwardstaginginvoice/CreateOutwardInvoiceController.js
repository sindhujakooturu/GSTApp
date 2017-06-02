(function (module) {
	gst.controllers = _.extend(module, {
        CreateOutwardInvoiceController: function (scope, resourceFactory, location, dateFilter) {
            scope.outwardinv = [];
            /*scope.restrictDate = new Date();
            resourceFactory.officeResource.getAllOfficesInAlphabeticalOrder(function (data) {
                scope.offices = data;
                scope.formData = {
                    isLoanOfficer: true,
                    officeId: scope.offices[0].id,
                };
            });*/

            scope.submit = function () {
            	
            	this.formData.locale = scope.optlang.code;
            	var supplierInvDate = dateFilter(scope.formData.supplierInvDate, scope.df);
                this.formData.dateFormat = scope.df;
                this.formData.supplierInvDate = supplierInvDate;
                
                resourceFactory.outwardinvResource.save(this.formData, function (data) {
                    location.path('/outwardstaginginvoice/');
                });
            };
        }
    });
	gst.ng.application.controller('CreateOutwardInvoiceController', ['$scope', 'ResourceFactory', '$location', 'dateFilter', gst.controllers.CreateOutwardInvoiceController]).run(function ($log) {
        $log.info("CreateOutwardInvoiceController initialized");
    });
}(gst.controllers || {}));
