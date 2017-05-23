(function (module) {
	gst.filters = _.extend(module, {
        sort: function () {
            return function (input) {
                return input.sort();
            }
        }
    });
	gst.ng.application.filter('sort', ['dateFilter', gst.filters.sort]).run(function ($log) {
        $log.info("sort filter initialized");
    });
}(gst.filters || {}));
