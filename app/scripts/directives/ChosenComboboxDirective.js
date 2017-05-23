(function (module) {
	gst.directives = _.extend(module, {
        ChosenComboboxDirective: function ($compile) {
            var linker = function (scope, element, attrs) {
                var list = attrs['chosen'];
                scope.$watch(list, function () {
                    element.trigger('liszt:updated');
                    element.trigger("chosen:updated");
                });

                element.chosen({search_contains:true});
            };

            return {
                restrict: 'A',
                link: linker
            }
        }
    });
}(gst.directives || {}));

gst.ng.application.directive("chosen", ['$compile', gst.directives.ChosenComboboxDirective]).run(function ($log) {
    $log.info("ChosenComboboxDirective initialized");
});