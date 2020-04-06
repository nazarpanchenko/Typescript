export const createLogger = () => {
    let logs = {
        message : [],
        dateTime : [],
        type : []
    };
    let records = [];

    const warn = (warnMessage) => {
        logs.message.push(warnMessage);
        logs.dateTime.push(new Date());
        logs.type.push('warn');
        records.push(logs);
    };

    const error = (errMessage) => {
        logs.message.push(errMessage);
        logs.dateTime.push(new Date());
        logs.type.push('warn');
        records.push(logs);
    };

    const log = (logMessage) => {
        logs.message.push(logMessage);
        logs.dateTime.push(new Date());
        logs.type.push('log');
        records.push(logs);
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
