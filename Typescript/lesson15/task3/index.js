export const createLogger = () => {
    let logs = {
        records : []
    };
    let messages = {
        message : '',
        dateTime : new Date(),
        type : ''
    };

    const warn = (warnMessage) => {
        messages.message = warnMessage;
        messages.dateTime = new Date();
        messages.type = 'warn';
        logs.records.push(messages);
    };

    const error = (errMessage) => {
        messages.message = errMessage;
        messages.dateTime = new Date();
        messages.type = 'err';
        logs.records.push(messages);
    };

    const log = (logMessage) => {
        messages.message = logMessage;
        messages.dateTime = new Date();
        messages.type = 'log';
        logs.records.push(messages);
    };

    const getRecords = (logType) => {
        if (!logType) return logs.records.sort((a, b) => b.dateTime > a.dateTime ? -1 : 1);

        logs.records = logs.records.filter(log => log.type === logType);
        logs.records = logs.records.sort((a, b) => b.dateTime > a.dateTime ? -1 : 1);

        return logs.records;
    };

    return {
        warn : warn,
        error : error,
        log : log,
        getRecords : getRecords
    };
};
