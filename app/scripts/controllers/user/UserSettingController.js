(function (module) {
	gst.controllers = _.extend(module, {
        UserSettingController: function (scope, translate, localStorageService, tmhDynamicLocale) {

            
            scope.dates = [
                'dd MMMM yyyy',
                'dd/MMMM/yyyy',
                'dd-MMMM-yyyy',
                'dd-MM-yy',
                'MMMM-dd-yyyy',
                'MMMM dd yyyy',
                'MMMM/dd/yyyy',
                'MM-dd-yy',
                'yyyy-MM-dd'
            ];

            scope.langs = gst.models.Langs;
            

            scope.$watch(function () {
                return scope.df;
            }, function () {
                scope.updateDf(scope.df);
            });

            scope.$watch(function () {
                return scope.optlang;
            }, function () {
                scope.changeLang(scope.optlang);
            });


        }
    });

	gst.ng.application.controller('UserSettingController', ['$scope', '$translate', 'localStorageService', 'tmhDynamicLocale', gst.controllers.UserSettingController]).run(function ($log) {
        $log.info("UserSettingController initialized");
    });
}(gst.controllers || {}));