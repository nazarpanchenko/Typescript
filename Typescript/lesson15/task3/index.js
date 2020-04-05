export const createLogger = () => {
    let logs = {
        message : '',
        dateTime : null,
        type : ''
    };
    let records = [];

    const warn = (warnMessage) => {
        logs.message = warnMessage;
        logs.dateTime = new Date();
        logs.type = 'warn';
        records.push(logs);
    };

    const error = (errMessage) => {
        logs.message = errMessage;
        logs.dateTime = new Date();
        logs.type = 'error';
        records.push(logs);
    };

    const log = (logMessage) => {
        logs.message = logMessage;
        logs.dateTime = new Date();
        logs.type = 'log';
        records.push(logs);
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
