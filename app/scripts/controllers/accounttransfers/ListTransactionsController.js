(function (module) {
	gst.controllers = _.extend(module, {
        ListTransactionsController: function (scope, resourceFactory, paginatorService,routeParams, dateFilter, location) {

            scope.standingInstructionId = routeParams.instructionId;
            scope.details ={};
            scope.transactions={};
            var fetchFunction = function (offset, limit, callback) {
                var params = {};
                params.offset = offset;
                params.limit = limit;
                params.locale = scope.optlang.code;
                params.dateFormat = scope.df;
                 params.standingInstructionId = scope.standingInstructionId;
               
                 resourceFactory.standingInstructionResource.getTransactions(params, function (data) {
                scope.details.fromAccount = data.fromAccount;
                scope.details.toAccount = data.toAccount;
                scope.details.fromAccountType = data.fromAccountType;
                scope.details.toAccountType = data.toAccountType;
                scope.details.toClient = data.toClient;
                scope.details.name = data.name;
                scope.details.id = data.id;
                callback(data.transactions);
            });

            
            

            };
        scope.transactions = paginatorService.paginate(fetchFunction, 14);

        }
    });
	gst.ng.application.controller('ListTransactionsController', ['$scope', 'ResourceFactory', 'PaginatorService', '$routeParams','dateFilter', '$location', gst.controllers.ListTransactionsController]).run(function ($log) {
        $log.info("ListTransactionsController initialized");
    });
}(gst.controllers || {}));
