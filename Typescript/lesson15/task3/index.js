export const createLogger = () => {
    let memory = '';
    let logs = [];

    const warn = (warnMessage) => {
        memory = warnMessage;
        logs.push(memory);

        return logs;
    };

    const error = (errMessage) => {
        memory = errMessage;
        logs.push(memory);

        return logs;
    };

    const log = (logMessage) => {
        memory = logMessage;
        logs.push(memory);

        return logs;
    };

    const getRecords = (logType) => {
        if (!logType) return logs.sort((a, b) => b > a ? -1 : 1);

        return logs.filter((memory) => memory === logType).sort((a, b) => b > a ? -1 : 1);
    };

    return {
        warn : warn,
        error : error,
        log : log,
        getRecords : getRecords
    };
};
