(function (module) {
	gst.directives = _.extend(module, {
        OnBlurDirective: function ($parse) {
            return function (scope, elm, attrs) {
                var onBlurFunction = $parse(attrs['ngOnBlur']);
                elm.bind("blur", function (event) {
                    scope.$apply(function () {
                        onBlurFunction(scope, { $event: event });
                    })
                });
            };
        }
    });
}(gst.directives || {}));

gst.ng.application.directive("ngOnBlur", ['$parse', gst.directives.OnBlurDirective]).run(function ($log) {
    $log.info("OnBlurDirective initialized");
});