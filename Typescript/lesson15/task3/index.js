export const createLogger = () => {
    let logs = {
        message: [],
        dateTime: new Date(),
        type: '...'
    };

    const warn = (warnMessage) => {
        logs.message.push(warnMessage);
        logs.dateTime = new Date();
        logs.type = 'warn';
    };

    const error = (errMessage) => {
        logs.message.push(errMessage);
        logs.dateTime = new Date();
        logs.type = 'error';
    };

    const log = (logMessage) => {
        logs.message.push(logMessage);
        logs.dateTime = new Date();
        logs.type = 'log';
    };

    const getRecords = (logType) => {
        if (!logType) return logs.message.sort((a, b) => b.dateTime > a.dateTime ? -1 : 1);

        return records.filter(message => message.type === logType).sort((a, b) => b.dateTime > a.dateTime ? -1 : 1);
    };

    return {
        warn : warn,
        error : error,
        log : log,
        getRecords : getRecords
    };
};
