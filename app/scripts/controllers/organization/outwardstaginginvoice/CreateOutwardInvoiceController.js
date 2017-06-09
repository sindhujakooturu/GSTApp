(function (module) {
	gst.controllers = _.extend(module, {
        CreateOutwardInvoiceController: function (scope, resourceFactory, location, dateFilter) {
            scope.outwardinv = [];
            scope.supplierInvDate = new Date();
            scope.orderDate = new Date();
            
            scope.submit = function () {
            	
            	scope.formData.isDetails = false;
            	this.formData.locale = scope.optlang.code;
            	
            	if (scope.supplierInvDate) {
                    reqDate = dateFilter(scope.supplierInvDate, scope.df);
                    this.formData.supplierInvDate = reqDate;
                }

                if (scope.orderDate) {
                    this.formData.orderDate = dateFilter(scope.orderDate, scope.df);
                }
                
                this.formData.dateFormat = scope.df;
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