(function (module) {
	gst.filters = _.extend(module, {
        YesOrNo: function () {
            return function (input) {
                var status = 'No';
                if (input == true) {
                    status = 'Yes';
                } else if (input == false) {
                    status = 'No';
                }
                return status;
            }
        }
    });
	gst.ng.application.filter('YesOrNo', ['dateFilter', gst.filters.YesOrNo]).run(function ($log) {
        $log.info("YesOrNo filter initialized");
    });
}(gst.filters || {}));
