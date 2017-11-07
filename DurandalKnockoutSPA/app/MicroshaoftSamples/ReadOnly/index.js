define(['knockout','knockoutCustomBindings/readonly'], function (ko1) {
    var firstName = ko1.observable("Planet"),
        lastName = ko1.observable("Earth");

    var fullName = ko1.computed(function () {
        // Knockout tracks dependencies automatically.
        // It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
        return firstName() + " " + lastName();
    });
    var onPasteProcess = function (data, e) {
        var text = window.clipboardData.getData('text');

        if (text == 'sb') {
            e.preventDefault();
            return false;
        }
        return true;

    };
    return  {
        firstName: firstName,
        lastName: lastName,
        fullName: fullName,
        onPasteProcess: onPasteProcess,
        foo: function (x) { return '[' + x + ']'; }
    }
});