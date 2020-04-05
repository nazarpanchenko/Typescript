import { createLogger } from './index';

it('should check if all loggers has their own variable scope', () => {
    let getRecords = createLogger().getRecords('warn');

    expect(getRecords).toEqual([{ message : 'Warning', dateTime : new Date(), type : 'warn' }]);
});
