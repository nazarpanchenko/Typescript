export const createLogger = () => {
    let logs = {
        message: [],
        dateTime: [],
        type: []
    };

    const warn = (warnMessage) => {
        logs.message.push(warnMessage);
        logs.dateTime.push(new Date());
        logs.type.push('warn');
    };

    const error = (errMessage) => {
        logs.message.push(errMessage);
        logs.dateTime.push(new Date());
        logs.type.push('error');
    };

    const log = (logMessage) => {
        logs.message.push(logMessage);
        logs.dateTime.push(new Date());
        logs.type.push('log');
    };

    const getRecords = (logType) => {
        if (!logType) return logs.dateTime.sort((a, b) => b > a ? -1 : 1);

        logs.type = logs.type.filter(log => log === logType);
        logs.dateTime = logs.dateTime.sort((a, b) => b > a ? -1 : 1);

        return logs.message;
    };

    return {
        warn : warn,
        error : error,
        log : log,
        getRecords : getRecords
    };
};
