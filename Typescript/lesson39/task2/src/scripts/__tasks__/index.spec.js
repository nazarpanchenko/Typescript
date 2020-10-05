import { onStorageChange } from '../index';

it('should check the value of thbe key', () => {
    const key = onStorageChange(event);

    expect(key).toEqual('tasksList');
});
