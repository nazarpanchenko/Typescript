import { createLogger } from '../logger';

it('should return stored logs', () => {
    const logger = createLogger('user login');

    expect(logger.getLogs()).toEqual([]);
});

it('should save log message', () => {
    const logger = createLogger('user login');
    logger.log('login success');

    expect(logger.getLogs()).toEqual(['log - logger name - message']);
});

it('should save errors', () => {
    const logger = createLogger('user login');
    logger.error('login failed');

    expect(logger.getLogs()).toEqual(['error - logger name - error text']);
});
