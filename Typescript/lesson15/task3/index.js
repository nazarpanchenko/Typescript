export const createLogger = () => {
    let records = [];
    let messages = {
        message : '',
        dateTime : new Date(),
        type : ''
    };

    const warn = (warnMessage) => {
        messages.message = warnMessage;
        messages.dateTime = new Date();
        messages.type = 'warn';
        records.push(messages);
    };

    const error = (errMessage) => {
        messages.message = errMessage;
        messages.dateTime = new Date();
        messages.type = 'error';
        records.push(messages);
    };

    const log = (logMessage) => {
        messages.message = logMessage;
        messages.dateTime = new Date();
        messages.type = 'log';
        records.push(messages);
    };

    const getRecords = (logType) => {
        if (!logType) return records.sort((a, b) => b.dateTime > a.dateTime ? -1 : 1);

        return records.filter(log => log.type === logType).sort((a, b) => b.dateTime > a.dateTime ? -1 : 1);
    };

    return {
        warn : warn,
        error : error,
        log : log,
        getRecords : getRecords
    };
};
