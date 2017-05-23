(function (module) {
	gst.filters = _.extend(module, {
        DotRemove: function () {
            return function (input) {
                if (input) {
                    var exp = input;
                    var alpha = '';
                    for (var i = 0; i < exp.length; i++) {
                        if (exp[i] != '.') {
                            alpha = alpha + exp[i];
                        }
                    }
                    return alpha;
                }
            }
        }
    });
	gst.ng.application.filter('DotRemove', ['dateFilter', gst.filters.DotRemove]).run(function ($log) {
        $log.info("DotRemove filter initialized");
    });
}(gst.filters || {}));
