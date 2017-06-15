(function (module) {
	gst.controllers = _.extend(module, {
		CreateTestGSTController: function (scope, resourceFactory, location, dateFilter) {
			
			scope.formData = {};
			scope.formData1 = [];
			scope.column5 = new Date();
            scope.column9 = new Date();
            scope.formData.childDetails = [];
            
            
			scope.submit = function () {

						if (scope.formData1.column15 && scope.formData1.column16 && scope.formData1.column17 && scope.formData1.column18 && scope.formData1.column19 && scope.formData1.column20 && scope.formData1.column21 && scope.formData1.column22 && scope.formData1.column23 && scope.formData1.column24 && scope.formData1.column25 && scope.formData1.column26 && scope.formData1.column27 && scope.formData1.status && scope.formData1.invoiceId) {
							
				             scope.formData.childDetails.push({
				            	 column15 	    : scope.formData1.column15,
				            	 column16 	    : scope.formData1.column16,
				            	 column17 	    : scope.formData1.column17,
				            	 column18 	    : scope.formData1.column18,
				            	 column19 	    : scope.formData1.column19,
				            	 column20 	    : scope.formData1.column20,
				            	 column21 	    : scope.formData1.column21,
				            	 column22 	    : scope.formData1.column22,
				            	 column23 	    : scope.formData1.column23,
				            	 column24 	    : scope.formData1.column24,
				            	 column25 	    : scope.formData1.column25,
				            	 column26 	    : scope.formData1.column26,
				            	 column27 	    : scope.formData.column27,
				            	 invoiceId 	    : scope.formData1.invoiceId,
				            	 status			: scope.formData1.status
			  	  												
			  	  											  });
						}
						
				if (scope.column5) {
                    reqDate = dateFilter(scope.column5, scope.df);
                    this.formData.column5 = reqDate;
                }

                if (scope.column9) {
                    this.formData.column9 = dateFilter(scope.column9, scope.df);
                }
                scope.formData.dateFormat = scope.df;
                this.formData.locale = scope.optlang.code;
                resourceFactory.testPostResource.save(this.formData, function (data) {
                    location.path('/testgst');
                });
            };
            
        }
    });
	gst.ng.application.controller('CreateTestGSTController', ['$scope', 'ResourceFactory', '$location', 'dateFilter', gst.controllers.CreateTestGSTController]).run(function ($log) {
        $log.info("CreateTestGSTController initialized");
    });
}(gst.controllers || {}));