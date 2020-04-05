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
        let result = [];
        
        if (!logType) {
            records = records.sort((log_A, log_B) => log_B.dateTime > log_A.dateTime ? -1 : 1);

            for (let i = 0; i < records.length; i++) {
                result.push(records[i].message);
            }    

            return result;
        }

        records = records.filter(log => log.type === logType);
        records = records.sort((log_A, log_B) => log_B.dateTime > log_A.dateTime ? -1 : 1);

        for (let i = 0; i < records.length; i++) {
            result.push(records[i].message);
        }

        return result;
    };

    return {
        warn : warn,
        error : error,
        log : log,
        getRecords : getRecords
    };
};
