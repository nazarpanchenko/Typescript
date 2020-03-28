import { createLogger } from './index';

it('should check if all loggers has their own variable scope', () => {
    const logger1 = createLogger().warn('You got a warning message!');
    const logger2 = createLogger().error('You got an error!');
    const logger3 = createLogger().warn('New Log!');
    const getLogsByType = createLogger().getRecords('warn');

    expect(logger1).toEqual([{ message : 'You got a warning message!', dateTime : new Date(), type : 'warn' }]);
    expect(logger2).toEqual([{ message : 'You got an error!', dateTime : new Date(), type : 'error' }]);
    expect(logger3).toEqual([{ message : 'New Log!', dateTime : new Date(), type : 'log' }]);
    expect(logger1).toEqual([{ message : 'You got a warning message!', dateTime : new Date(), type : 'warn' }]);

    expect(getLogsByType).toEqual([{ message : 'You got a warning message!', dateTime : new Date(), type : 'warn' }]);
});
