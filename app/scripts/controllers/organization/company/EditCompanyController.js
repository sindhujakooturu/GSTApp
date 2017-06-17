(function (module) {
	gst.controllers = _.extend(module, {
		EditCompanyController: function (scope, routeParams, resourceFactory, location, dateFilter) {
            
			scope.company = {};

            resourceFactory.companyResource.getall({companyId: routeParams.id}, function (data) {
                
                scope.companyId = data.id;
                
                scope.formData = {
                		companyName: data.companyName,
                		contactName: data.contactName,
                		officePhone: data.officePhone,
                		homePhone: data.homePhone,
                		mobile: data.mobile,
                		fax: data.fax,
                		email: data.email,
                		gstnRegNo: data.gstnRegNo,
                		panNo: data.panNo,
                		addressLine1: data.addressLine1,
                		addressLine2: data.addressLine2,
                		city: data.city,
                		state: data.state,
                		country: data.country,
                		pin: data.pin
                };

            });

            scope.submit = function () {
                
                resourceFactory.companyResource.update({'companyId': routeParams.id}, this.formData, function (data) {
                    location.path('/viewcompany/' + data.resourceId);
                });
            };
            
        }
    });
	gst.ng.application.controller('EditCompanyController', ['$scope', '$routeParams', 'ResourceFactory', '$location', 'dateFilter', gst.controllers.EditCompanyController]).run(function ($log) {
        $log.info("EditCompanyController initialized");
    });
}(gst.controllers || {}));