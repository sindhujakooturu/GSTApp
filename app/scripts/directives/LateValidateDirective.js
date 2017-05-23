(function (module) {
	gst.directives = _.extend(module, {
        LateValidateDirective: function () {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function (scope, elm, attr, ctrl) {
                    if (attr.type === 'radio' || attr.type === 'checkbox') return;
                    elm.bind('blur', function () {
                        scope.$apply(function () {
                            if (elm.val() == "") {
                                ctrl.$setValidity('req', false);
                            } else {
                                ctrl.$setValidity('req', true);
                            }
                        });
                    });
                }
            };
        }
    });
}(gst.directives || {}));

gst.ng.application.directive("lateValidate", [gst.directives.LateValidateDirective]).run(function ($log) {
    $log.info("LateValidateDirective initialized");
});