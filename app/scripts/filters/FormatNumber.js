(function (module) {
	gst.filters = _.extend(module, {
        FormatNumber: function ($filter) {
            return function (input, fractionSize) {
                if (isNaN(input)) {
                    return input;
                } else {
                    //TODO- Add number formatting also
                    if (input != "" && input != undefined) {
                        return $filter('number')(input, fractionSize);
                    };
                };
            }
        }
    });
	gst.ng.application.filter('FormatNumber', ['$filter', gst.filters.FormatNumber]).run(function ($log) {
        $log.info("FormatNumber filter initialized");
    });
}(gst.filters || {}));
