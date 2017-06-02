(function (module) {
	gst.controllers = _.extend(module, {
        GlobalConfigurationController: function (scope, resourceFactory, location, route, $modal) {
            scope.configs = [];
            resourceFactory.configurationResource.get(function (data) {
                for (var i in data.globalConfiguration) {
                    data.globalConfiguration[i].showEditvalue = true;
                    scope.configs.push(data.globalConfiguration[i])
                }
                resourceFactory.cacheResource.get(function (data) {
                    for (var i in data) {
                        if (data[i].cacheType && data[i].cacheType.id == 2) {
                            var cache = {};
                            cache.name = 'Is Cache Enabled';
                            cache.enabled = data[i].enabled;
                            cache.showEditvalue = false;
                            scope.configs.push(cache);
                        }
                    }
                });
            });

            if (!scope.searchCriteria.config) {
                scope.searchCriteria.config = null;
                scope.saveSC();
            }
            scope.filterText = scope.searchCriteria.config;

            scope.onFilter = function () {
                scope.searchCriteria.config = scope.filterText;
                scope.saveSC();
            };
            	
            scope.showvalue = function(valuee) {
            	   $modal.open({
            	    templateUrl : 'showValue.html',
            	    controller : ShowValueCntrl,
            	    resolve : {
            	    	valuee : function(){
            	      return valuee;
            	     }
            	    }
            	   });
            	   
            	  };
            	  function ShowValueCntrl($scope, $modalInstance, valuee) {
            		  $scope.valuee = valuee;
            		  $scope.cancel = function () {
                          $modalInstance.dismiss('cancel');
                      };
            	  }
            
            
            scope.enable = function (id, name) {
                if (name == 'Is Cache Enabled') {
                    var temp = {};
                    temp.cacheType = 2;
                    resourceFactory.cacheResource.update(temp, function (data) {
                        route.reload();
                    });
                }
                else {
                    var temp = {'enabled': 'true'};
                    resourceFactory.configurationResource.update({'id': id}, temp, function (data) {
                        route.reload();
                    });
                }
            };
            scope.disable = function (id, name) {
                if (name == 'Is Cache Enabled') {
                    var temp = {};
                    temp.cacheType = 1;
                    resourceFactory.cacheResource.update(temp, function (data) {
                        route.reload();
                    });
                }
                else {
                    var temp = {'enabled': 'false'};
                    resourceFactory.configurationResource.update({'id': id}, temp, function (data) {
                        route.reload();
                    });
                }
            };
        }
    });
	gst.ng.application.controller('GlobalConfigurationController', ['$scope', 'ResourceFactory', '$location', '$route','$modal', gst.controllers.GlobalConfigurationController]).run(function ($log) {
        $log.info("GlobalConfigurationController initialized");
    });
}(gst.controllers || {}));