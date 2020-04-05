import { createLogger } from './index';

it('should check if all loggers has their own variable scope', () => {
    let logger1 = createLogger(),
        logger2 = createLogger();

    logger1 = logger1.warn('Warning 1');
    logger2 = logger2.warn('Warning 2');

    let getRecords = createLogger().getRecords('warn');

    expect(logger1).toEqual([{ message : 'Warning 1', dateTime : new Date(), type : 'warn' }]);
    expect(logger2).toEqual([{ message : 'Warning 2', dateTime : new Date(), type : 'warn' }]);

    expect(getRecords).toEqual([
        { message : 'Warning 1', dateTime : new Date(), type : 'warn' },
        { message : 'Warning 2', dateTime : new Date(), type : 'warn' }
    ]);
});
