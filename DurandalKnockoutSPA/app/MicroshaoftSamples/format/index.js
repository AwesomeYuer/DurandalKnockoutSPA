define(['knockout', 'knockoutCustomBindings/readonly', 'knockoutCustomBindings/format'], function (ko1) {
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

    var onBlurProcess = function () {
        alert("onBlur");

    };
    
    
    var result = {
        compositionCompleted : false,
        firstName: firstName,
        lastName: lastName,
        fullName: fullName,
        onPasteProcess: onPasteProcess,
        onBlurProcess: onBlurProcess,
        foo: function (x) { return '[' + x + ']'; },
        //compositionComplete: compositionCompleteProcess,

    };
    
    var compositionCompleteProcess = function () {
        
        result.firstName("999999999999");
       
        console.log("compositionComplete");
        result.compositionCompleted = true;
    };

    result.compositionComplete = compositionCompleteProcess;


    return result;
});