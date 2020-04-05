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

        return records;
    };

    const error = (errMessage) => {
        logs.message = errMessage;
        logs.dateTime = new Date();
        logs.type = 'error';
        records.push(logs);

        return records;
    };

    const log = (logMessage) => {
        logs.message = logMessage;
        logs.dateTime = new Date();
        logs.type = 'log';
        records.push(logs);

        return records;
    };

    const getRecords = (logType) => {
        if (!logType) return records.sort((log_A, log_B) => log_B.dateTime > log_A.dateTime ? -1 : 1);

        records = records.filter(log => log.type === logType);

        return records.sort((log_A, log_B) => log_B.dateTime > log_A.dateTime ? -1 : 1);;
    };

    return {
        warn : warn,
        error : error,
        log : log,
        getRecords : getRecords
    };
};
