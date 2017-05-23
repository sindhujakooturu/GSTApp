var gst = (function (module) {
    module.ng = {
        config: angular.module('config_params', ['configurations']),
        services: angular.module('GST_Services', ['ngResource']),
        application: angular.module('GST_Application', ['GST_Services', 'config_params', 'webStorageModule', 'ui.bootstrap' , 'pascalprecht.translate', 'nvd3ChartDirectives', 'notificationWidget', 'angularFileUpload', 'modified.datepicker', 'ngRoute', 'ngSanitize', 'LocalStorageModule', 'ngIdle', 'ngCsv', 'frAngular', 'tmh.dynamicLocale', 'mgo-angular-wizard', 'webcam', 'angularUtils.directives.dirPagination'])
    };
    return module;
}(gst || {}));
