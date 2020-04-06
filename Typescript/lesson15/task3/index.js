export const createLogger = () => {
    const records = {
        warn: [],
        error: [],
        log: []
    };
    return {
        warn(message) {
            records.warn.push({
                message,
                dateTime: new Date(),
                type: 'warn'
            });
        },
        error(message) {
            records.error.push({
                message,
                dateTime: new Date(),
                type: 'error'
            });
        },
        log(message) {
            records.log.push({
                message,
                dateTime: new Date(),
                type: 'log'
            });
        },
        getRecords(type) {
            return type
                ? records[type].reverse()
                : Object.values(records)
                    .reduce((acc, rec) => acc.concat(rec), [])
                    .sort((a, b) => (b.dateTime < a.dateTime ? -1 : 1));
        }
    };  
};