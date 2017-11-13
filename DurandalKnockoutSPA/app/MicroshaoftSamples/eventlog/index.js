define(['knockout', 'utilities/eventlogger', 'utilities/eventlogentrytype'], function (
            ko1,
            EventLogger,
            EventLogEntryType
) {
    
    var vm = {
        logging: function () {
                    EventLogger.logging("hahha");
                    EventLogger.logging(function () {
                        return "aaaaaa";
                    }, 9999, 10001,EventLogEntryType.Error);
                }
    };
    return vm;
});