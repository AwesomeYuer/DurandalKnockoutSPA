define(["knockout"],function (ko1) {
    ko1.bindingHandlers.format = {
        update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var bindingFieldValueAccessor = allBindingsAccessor.get('value');
            var bindingFieldValue = bindingFieldValueAccessor();
            var params = valueAccessor();
            //console.log(params.Param1);
            //console.log(params.Param2);
            if (!viewModel.compositionCompleted) {
                //仅在 compositionCompleted 之前处理一次
                bindingFieldValueAccessor("CompositionCompleted: " + bindingFieldValue);
            }
        }
    };
});