define(["enums/eventlogentrytype"], function (EventLogEntryType) {

    return {
                EventLogSourceName: "Microshaoft",
                EventLogEnabledMaxEventLevel: 10000,

                EventLogDefaultEventLevel: 100000,
                EventLogDefaultEventID: 10000,
                EventLogDefaultCategory: 10000,
                
                EventLogDefaultEntryType: EventLogEntryType.Information,
                
                EventLogDefaultCaughtErrorExceptionEventID: 10000,
                EventLogDefaultUnCaughtErrorExceptionEventID: 10000,
        };


   

});

