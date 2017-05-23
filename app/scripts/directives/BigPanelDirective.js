(function (module) {
	gst.directives = _.extend(module, {
        BigPanelDirective: function () {
            return {
                restrict: "E",
                transclude: true,
                scope: {
                    title: "@"
                },

                template: "<div class='panelbig'>" +
                    "<div class='panel-header'>" +
                    "<div class='alert-box panel-header-text'>{{title}}</div></div>" +
                    "<div ng-transclude></div></div>"
            };

        }
    });
}(gst.directives || {}));

gst.ng.application.directive("panelbig", [gst.directives.BigPanelDirective]).run(function ($log) {
    $log.info("BigPanelDirective initialized");
});