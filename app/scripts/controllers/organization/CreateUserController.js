(function (module) {
	gst.controllers = _.extend(module, {
        CreateUserController: function (scope, resourceFactory, location) {
            scope.offices = [];
            scope.available = [];
            scope.selected = [];
            scope.selectedRoles = [] ;
            scope.availableRoles = [];
            scope.formData = {
                sendPasswordToEmail: true,
                roles: []
            };
            scope.isCompanySelected = false;
            resourceFactory.userTemplateResource.get(function (data) {
                scope.offices = data.allowedOffices;
                scope.availableRoles = angular.copy(data.availableRoles);
                scope.availableRoles1 = angular.copy(data.availableRoles);
            });
            
            
            
            scope.addRole = function () {
            	console.log(scope.availableRoles);
                for (var i in this.available) {
                    for (var j in scope.availableRoles) {
                        if (scope.availableRoles[j].id == this.available[i]) {
                            var temp = {};
                            temp.id = this.available[i];
                            temp.name = scope.availableRoles[j].name;
                            scope.selectedRoles.push(temp);
                            scope.availableRoles.splice(j, 1);
                        }
                    }
                }
                //We need to remove selected items outside of above loop. If we don't remove, we can see empty item appearing
                //If we remove available items in above loop, all items will not be moved to selectedRoles
                for (var i in this.available) {
                    for (var j in scope.selectedRoles) {
                        if (scope.selectedRoles[j].id == this.available[i]) {
                            scope.available.splice(i, 1);
                        }
                    }
                }
            };
            
            scope.removeRole = function () {
                for (var i in this.selected) {
                    for (var j in scope.selectedRoles) {
                        if (scope.selectedRoles[j].id == this.selected[i]) {
                            var temp = {};
                            temp.id = this.selected[i];
                            temp.name = scope.selectedRoles[j].name;
                            scope.availableRoles.push(temp);
                            scope.selectedRoles.splice(j, 1);
                        }
                    }
                }
                //We need to remove selected items outside of above loop. If we don't remove, we can see empty item appearing
                //If we remove selected items in above loop, all items will not be moved to availableRoles
                for (var i in this.selected) {
                    for (var j in scope.availableRoles) {
                        if (scope.availableRoles[j].id == this.selected[i]) {
                            scope.selected.splice(i, 1);
                        }
                    }
                }
            };

            scope.actionOnRoles = function(officeId){
            	scope.availableRoles = angular.copy(scope.availableRoles1);
            	for(var i in scope.offices){
            		if(officeId == scope.offices[i].id && scope.offices[i].name == "Trigital"){
            			for(var i in scope.availableRoles){
            				if(scope.availableRoles[i].name != "Super user"){
            					scope.availableRoles.splice(i, 1);
            				}
            			}
            			break;
            		}else{
            			for(var i in scope.availableRoles){
            				if(scope.availableRoles[i].name == "Super user"){
            					scope.availableRoles.splice(i, 1);
            				}
            			}
            		}
            	}
            };
            
            scope.getOfficeStaff = function(officeId){

            	scope.isCompanySelected = false;
            	scope.company = [];
            	scope.selectedRoles = [];
            	scope.actionOnRoles(officeId);
            	
            	if(officeId == 1){
            		scope.isTrigitalOffice = true;delete scope.formData.companyId;
            	}else{
            		scope.isTrigitalOffice = false
            	}
            	if(scope.isTrigitalOffice == false){
            		resourceFactory.companyByUserResource.get({officeId:scope.formData.officeId},function (data) {
            			scope.company = data;
            		});
            	}
            };
            
           scope.companyChangFun = function(){
        	   scope.selectedRoles = [];
        	   scope.isCompanySelected = true;
            };

            scope.changeOfficeFun =function(officeId){
            	console.log("hiiii");
            	scope.availableRoles = scope.availableRoles1;
            	for(var i in scope.offices)
            	if(officeId == scope.offices[i].id && scope.offices[i].name == "Trigital"){}
            	
            }
            
            
            scope.submit = function () {
                for (var i in scope.selectedRoles) {
                    scope.formData.roles.push(scope.selectedRoles[i].id) ;
                }
                resourceFactory.userListResource.save(this.formData, function (data) {
                    location.path('/viewuser/' + data.resourceId);
                });
            };
        }
    });
	gst.ng.application.controller('CreateUserController', ['$scope', 'ResourceFactory', '$location', gst.controllers.CreateUserController]).run(function ($log) {
        $log.info("CreateUserController initialized");
    });
}(gst.controllers || {}));
