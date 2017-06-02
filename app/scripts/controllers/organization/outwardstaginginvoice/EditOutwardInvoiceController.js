(function (module) {
	gst.controllers = _.extend(module, {
		EditOutwardInvoiceController: function (scope, routeParams, resourceFactory, location, dateFilter) {
            scope.outwardinv = [];
            
            	resourceFactory.outwardinvResource.getall({companyId: routeParams.id}, function (data) {
                
                scope.outwardinvId = data.id;
                
                scope.formdata = data;
                
               /* scope.formData = {
                		gstin: data.gstin,
                		gstinPurchaser: data.gstinPurchaser,
                		cName: data.cName,
                		supplierInvNo: data.supplierInvNo,
                		supplierInvDate: data.supplierInvDate,
                		supplierInvValue: data.supplierInvValue,
                		supplyStateCode: data.supplyStateCode,
                		orderNo: data.orderNo,
                		orderDate: data.orderDate,
                		etin: data.etin,
                		invoiceId: data.invoiceId,
                		receiptStateCode: data.receiptStateCode,
                		status: data.status,
                		country: data.country,
                		pin: data.pin
                };*/
                
                
            });

            scope.submit = function () {
               /* this.formData.locale = scope.optlang.code;*/
                
                resourceFactory.companyResource.update({'outwardinvId': routeParams.id}, this.formData, function (data) {
                    location.path('/viewoutwardinvoice/');
                });
            };
            
        }
    });
	gst.ng.application.controller('EditOutwardInvoiceController', ['$scope', '$routeParams', 'ResourceFactory', '$location', 'dateFilter', gst.controllers.EditOutwardInvoiceController]).run(function ($log) {
        $log.info("EditOutwardInvoiceController initialized");
    });
}(gst.controllers || {}));
