define(['plugins/router', 'knockout'], function(router, ko) {
    var childRouter = router.createChildRouter()
        .makeRelative({
            moduleId:'MicroshaoftSamples',
            fromParent:true
        }).map([
            { route: ['', 'helloWorld'], moduleId: 'helloWorld/index', title: 'Hello World', type: 'intro', nav: true },
            { route: 'ReadOnly', moduleId: 'ReadOnly/index', title: 'ReadOnly', type: 'intro', nav: true },
            { route: 'Perf-Memory', moduleId: 'perf/memory', title: 'Perf-Memory', type: 'intro', nav: true },
            { route: 'JQuery-UI AutoComplete', moduleId: 'jquiAutoComplete/index', title: 'JQuery-UI AutoComplete', type: 'intro', nav: true },
            { route: 'Format custom binding', moduleId: 'format/index', title: 'Format custom binding', type: 'intro', nav: true },
            { route: 'EventLog', moduleId: 'eventlog/index', title: 'EventLog', type: 'intro', nav: true },
           
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