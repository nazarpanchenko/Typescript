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
        let result = [];

        logs = logs.sort((a, b) => b.dateTime < a.dateTime ? -1 : 1);

        for (let i = 0; i < logs.length; i++) {
            result.push(logs[i].message);
        }

        if (!logType) return result;

        logs = logs.filter(data => data.type === logType);

        return result;
    };

    return {
        warn : warn,
        error : error,
        log : log,
        getRecords : getRecords
    };
};
