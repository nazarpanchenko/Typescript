import { createLogger } from './index';

it('should check if all loggers has their own variable scope', () => {
    let logger = createLogger().warn('Warning');
    logger = createLogger().error('Error! ');
    logger = createLogger().warn('Warning 2');
    logger = createLogger().warn('Warning 3');

    let getRecords = createLogger().getRecords('warn');

    expect(logger).toEqual([{ message : 'Warning', dateTime : new Date(), type : 'warn' }]);
    expect(getRecords).toEqual([{ message : 'Warning', dateTime : new Date(), type : 'warn' }]);
});
