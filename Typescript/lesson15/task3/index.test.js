import { createLogger } from './index';

it('should check if all counters are independent', () => {
    const counter1 = createLogger().warn('You got a warning message!');
    const counter2 = createLogger().error('You got an error!');
    const counter3 = createLogger().warn('New log');
    const getLog = createLogger().getRecords('warn');

    expect(counter1).toEqual(['You got a warning message!']);
    expect(counter2).toEqual(['You got an error!']);
    expect(counter3).toEqual(['New log']);
    expect(counter1).toEqual(['You got a warning message!']);
    expect(getLog).toEqual(['warn']);
});
