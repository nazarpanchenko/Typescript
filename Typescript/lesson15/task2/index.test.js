import { makeCounter } from './index';

it('should check if the counters are independent', () => {
    const counter1 = makeCounter();
    const counter2 = makeCounter();

    counter1();
    counter1();
    counter2();
    counter1();
    counter2();

    expect(counter1).toEqual(2);
});
