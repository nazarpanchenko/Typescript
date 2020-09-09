import { onFormInputChange } from './index';
import { onCreateUser } from './index';

it('should check if HTTP POST method works', () => {
    const postRequest = onCreateUser();

    expect(postRequest).toEqual({
        email : 'test@gmail.com',
        userName : 'test',
        password : 'test'
    });
});
