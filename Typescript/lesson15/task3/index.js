export const createLogger = () => {
    let logs = {
        message: '',
        dateTime: null,
        type: ''
    };
    let records = [];

    const warn = (warnMessage) => {
        logs.message = warnMessage;
        logs.dateTime = new Date();
        logs.type = 'warn';
        records.push(logs);
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
        if (!logType) {
            logs.dateTime = logs.dateTime.sort((a, b) => b > a ? -1 : 1);

            return logs.message;
        }

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
