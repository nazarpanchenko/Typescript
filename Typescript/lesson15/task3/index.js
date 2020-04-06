export const createLogger = () => {
    let records = {
        message : [],
        dateTime : [],
        type : []
    };

    const warn = (warnMessage) => {
        records.message.push(warnMessage);
        records.dateTime.push(new Date());
        records.type.push('warn');
    };

    const error = (errMessage) => {
        records.message.push(errMessage);
        records.dateTime.push(new Date());
        records.type.push('error');
    };

    const log = (logMessage) => {
        records.message.push(logMessage);
        records.dateTime.push(new Date());
        records.type.push('log');
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
