import { createLogger } from './index';

it('should check if all loggers has their own variable scope', () => {
    let logger = createLogger().warn('You got a warning message!');
    logger = createLogger().error('You got an error message!');
    logger = createLogger().warn('New warning');
    logger = createLogger().warn('Another warning');

    let getRecords = createLogger().getRecords('warn');

    expect(logger).toEqual([{ message : 'You got a warning message!', dateTime : new Date(), type : 'warn' }]);
    expect(getRecords).toEqual([{ message : 'You got a warning message!', dateTime : new Date(), type : 'warn' }]);
});
