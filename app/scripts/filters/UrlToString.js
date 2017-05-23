(function (module) {
	gst.filters = _.extend(module, {
        UrlToString: function () {
            return function (input) {
                var exp = input;
                var alpha = '';
                for (var i = 0; i < exp.length; i++) {
                    if (exp[i] >= 'A' && exp[i] <= 'z') {
                        alpha = alpha + exp[i];
                    }
                }
                return alpha;
            }
        }
    });
	gst.ng.application.filter('UrlToString', ['dateFilter', gst.filters.UrlToString]).run(function ($log) {
        $log.info("UrlToString filter initialized");
    });
}(gst.filters || {}));
