define(['knockout','knockoutCustomBindings/readonly'], function (ko1) {
    var firstName = ko1.observable("Planet"),
        lastName = ko1.observable("Earth");

    var fullName = ko1.computed(function () {
        // Knockout tracks dependencies automatically.
        // It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
        return firstName() + " " + lastName();
    });

    return  {
        firstName: firstName,
        lastName: lastName,
        fullName: fullName,
        testFuncF: function testFunc() {


        } 
    }
});