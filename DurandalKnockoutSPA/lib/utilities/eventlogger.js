define(["configuration/appconfiguration"],function (AppConfig) {

    return {
        logging: function (onLogMessageValueFactory, eventLevel,  eventID, eventLogEntryType, eventCategory) {
                            if (!eventLevel) {
                                eventLevel = AppConfig.EventLogDefaultEventLevel;
                            }
                            if (eventLevel > AppConfig.EventLogEnabledMaxEventLevel) {
                                return;
                            }
                            if (!eventID) {
                                eventID = AppConfig.EventLogDefaultEventID;
                            }
                            if (!eventLogEntryType) {
                                eventLogEntryType = AppConfig.EventLogDefaultEntryType;
                            }
                            if (!eventCategory) {
                                eventCategory = AppConfig.EventLogDefaultCategory;
                            }
                            var logMessage = "";
                            if (typeof onLogMessageValueFactory === 'function' ) {
                                logMessage = onLogMessageValueFactory();
                            } else {
                                logMessage = onLogMessageValueFactory;
                            }
                            console.log(logMessage);
                        }
            };

   
   

});

