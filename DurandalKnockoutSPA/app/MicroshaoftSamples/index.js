define(['plugins/router', 'knockout'], function(router, ko) {
    var childRouter = router.createChildRouter()
        .makeRelative({
            moduleId:'MicroshaoftSamples',
            fromParent:true
        }).map([
            { route: ['', 'helloWorld'], moduleId: 'helloWorld/index', title: 'Hello World', type: 'intro', nav: true },
            { route: 'ReadOnly', moduleId: 'ReadOnly/index', title: 'ReadOnly', type: 'intro', nav: true },
           
        ]).buildNavigationModel();

    return {
        router: childRouter,
        introSamples: ko.computed(function() {
            return ko.utils.arrayFilter(childRouter.navigationModel(), function(route) {
                return route.type == 'intro';
            });
        }),
        detailedSamples: ko.computed(function() {
            return ko.utils.arrayFilter(childRouter.navigationModel(), function(route) {
                return route.type == 'detailed';
            });
        })
    };
});