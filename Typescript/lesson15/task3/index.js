export const createLogger = () => {
    let data = {
        message : '',
        dateTime : null,
        type : ''
    };
    let logs = [];

    const warn = (warnMessage) => {
        data.message = warnMessage;
        data.dateTime = new Date();
        data.type = 'warn';
        logs.push(data);

        return logs;
    };

    const error = (errMessage) => {
        data.message = errMessage;
        data.dateTime = new Date();
        data.type = 'error';
        logs.push(data);

        return logs;
    };

    const log = (logMessage) => {
        data.message = logMessage;
        data.dateTime = new Date();
        data.type = 'log';
        logs.push(data);

        return logs;
    };

    const getRecords = (logType) => {
        if (!logType) return logs.sort((a, b) => b.dateTime - a.dateTime);

        return logs.filter(data => data.type === logType).sort((a, b) => b.dateTime - a.dateTime);
    };

    return {
        warn : warn,
        error : error,
        log : log,
        getRecords : getRecords
    };
};
