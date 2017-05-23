(function (module) {
	gst.directives = _.extend(module, {
        SummaryDirective: function () {
            return {
                restrict: "E",
                transclude: true,
                scope: {
                    title: "@"
                },

                template: "<div class='summary'>" +
                    "<div class='summary-header'>" +
                    "<div class='summary-header-text'>{{title}}</div></div>" +
                    "<div ng-transclude></div></div>"
            };

        }
    });
}(gst.directives || {}));

gst.ng.application.directive("ngSummary", [gst.directives.SummaryDirective]).run(function ($log) {
    $log.info("SummaryDirective initialized");
});