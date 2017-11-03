define(["knockout"],function (ko1) {
    ko1.bindingHandlers.readonly = {
        update: function (element, valueAccessor) {
            var b = valueAccessor();
            if (b) {
                element.setAttribute("readonly", "readonly");
            } else {
                element.removeAttribute("readonly");
            }
        }
    };
});