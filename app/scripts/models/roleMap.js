(function (module) {
	gst.models = _.extend(module, {
        roleMap: {
            1: "superuser",
            2: "branchmanager",
            3: "funder"
        }
    });
}(gst.models || {}));
