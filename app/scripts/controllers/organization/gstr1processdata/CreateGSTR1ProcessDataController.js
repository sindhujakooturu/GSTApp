(function (module) {
	gst.controllers = _.extend(module, {
		CreateGSTR1ProcessDataController: function (scope, resourceFactory, location, dateFilter) {
			scope.formData = {};
			scope.fp = new Date();
            scope.submit = function () {
            	
            	delete scope.formData.status;
            	
            	scope.formData.locale = scope.optlang.code;
            	
            	if (scope.fp) {
                    this.formData.fp = dateFilter(scope.fp, scope.df);
                }
                
                this.formData.dateFormat = scope.df;
                
                resourceFactory.gstr1fileinvoiceResource.save(this.formData, function (data) {
                    location.path('/gstr1processdata');
                });
                
            };
        }
    });
	gst.ng.application.controller('CreateGSTR1ProcessDataController', ['$scope', 'ResourceFactory', '$location', 'dateFilter', gst.controllers.CreateGSTR1ProcessDataController]).run(function ($log) {
        $log.info("CreateGSTR1ProcessDataController initialized");
    });
}(gst.controllers || {}));