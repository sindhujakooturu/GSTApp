(function (module) {
	gst.controllers = _.extend(module, {
		EditGSTR1ProcessDataController: function (scope, routeParams, resourceFactory, location, dateFilter) {
			scope.gstr1processdata = {};
			scope.formData = {};
            
            	resourceFactory.gstr1fileinvoiceResource.getid({gstr1InvId: routeParams.id}, function (data) {
            		
            		 
                     scope.fp = new Date();
                     scope.gstr1InvId = data.id;
                
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
            	

                if (scope.fp) {
                    this.formData.fp = dateFilter(scope.fp, scope.df);
                }
                
                this.formData.dateFormat = scope.df;
                delete this.formData.id;
                
                resourceFactory.gstr1fileinvoiceResource.update({'gstr1InvId': routeParams.id}, this.formData, function (data) {
                    location.path('/viewgstr1processdata/' + data.resourceId);
                });
            };
        }
    });
	gst.ng.application.controller('EditGSTR1ProcessDataController', ['$scope', '$routeParams', 'ResourceFactory', '$location', 'dateFilter', gst.controllers.EditGSTR1ProcessDataController]).run(function ($log) {
        $log.info("EditGSTR1ProcessDataController initialized");
    });
}(gst.controllers || {}));