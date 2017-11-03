requirejs.config({
    paths: {
        'text': '../lib/require/v2.1.11/text',
        'durandal':'../lib/durandal/v2.2.0/js',
        'plugins' : '../lib/durandal/v2.2.0/js/plugins',
        'transitions': '../lib/durandal/v2.2.0/js/transitions',
        'knockout': '../lib/knockout/v3.4.2/knockout-3.4.2',
        'bootstrap': '../lib/bootstrap/js/bootstrap',
        //'jquery': '../lib/jquery/v1.9.1/jquery-1.9.1',
        'jquery': '../lib/jquery/v3.2.1/jquery-3.2.1', //dialog 报错
        'knockoutCustomBindings': '../lib/knockout/customBindings',
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        }
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'bootstrap'], function (system, app, viewLocator) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'Durandal Samples';

    //specify which plugins to install and their configuration
    app.configurePlugins({
        router:true,
        dialog: true,
        widget: {
            kinds: ['expander']
        }
    });

    app.start().then(function () {
        viewLocator.useConvention();
        app.setRoot('shell');
    });
});