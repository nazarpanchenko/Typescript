export const createLogger = () => {
    let records = {
        message : '',
        dateTime : null,
        type : ''
    };

    const warn = (warnMessage) => {
        records.message = warnMessage;
        records.dateTime = new Date();
        records.type = 'warn';
    };

    const error = (errMessage) => {
        records.message = errMessage;
        records.dateTime = new Date();
        records.type = 'error';
    };

    const log = (logMessage) => {
        records.message = logMessage;
        records.dateTime = new Date();
        records.type = 'log';
    };

    const getRecords = (type) => {
        return type ? records[type].reverse()
            : Object.values(records)
                .reduce((acc, rec) => acc.concat(rec), [])
                .sort((a, b) => (b.dateTime < a.dateTime ? -1 : 1));
    };

    return {
        warn : warn,
        error : error,
        log : log,
        getRecords : getRecords
    };
};
