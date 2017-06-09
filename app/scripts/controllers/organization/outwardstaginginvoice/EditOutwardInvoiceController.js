(function (module) {
	gst.controllers = _.extend(module, {
		EditOutwardInvoiceController: function (scope, routeParams, resourceFactory, location, dateFilter) {
            
			scope.outwardinv = [];
			scope.formData = {};
            
            	resourceFactory.outwardinvResource.getall({outwardinvId: routeParams.id}, function (data) {
            		
            		 scope.supplierInvDate = new Date();
                     scope.orderDate = new Date();
                     scope.outwardinvId = data.id;
                
                     scope.formData = data;
                
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
                		errorCode: data.errorCode,
                		errorDescripter: data.errorDescripter
                };*/
                
                
            });

            scope.submit = function () {
            	this.formData.locale = scope.optlang.code;
            	
            	if (scope.supplierInvDate) {
                    reqDate = dateFilter(scope.supplierInvDate, scope.df);
                    this.formData.supplierInvDate = reqDate;
                }

                if (scope.orderDate) {
                    this.formData.orderDate = dateFilter(scope.orderDate, scope.df);
                }
                
                this.formData.dateFormat = scope.df;
                delete this.formData.id;
                
                resourceFactory.outwardinvResource.update({'outwardinvId': routeParams.id}, this.formData, function (data) {
                    location.path('/viewoutwardinvoice/' + data.resourceId);
                });
            };
            
        }
    });
	gst.ng.application.controller('EditOutwardInvoiceController', ['$scope', '$routeParams', 'ResourceFactory', '$location', 'dateFilter', gst.controllers.EditOutwardInvoiceController]).run(function ($log) {
        $log.info("EditOutwardInvoiceController initialized");
    });
}(gst.controllers || {}));