(function (module) {
	gst.filters = _.extend(module, {
        DateFormat: function (dateFilter, localStorageService) {
            return function (input) {
                if (input) {
                    var tDate = new Date(input);
                    return dateFilter(tDate, localStorageService.getFromLocalStorage('dateformat'));
                }
                return '';
            }
        }
    });
	gst.ng.application.filter('DateFormat', ['dateFilter', 'localStorageService', gst.filters.DateFormat]).run(function ($log) {
        $log.info("DateFormat filter initialized");
    });
}(gst.filters || {}));
