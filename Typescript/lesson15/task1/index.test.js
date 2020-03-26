import { createCalculator } from './index';

it('should check the value of the first counter', () => {
    const calculator = createCalculator().addMemory(8);

    expect(calculator).toEqual(8);
});

it('should check the value of the second counter', () => {
    const calculator = createCalculator().decreaseMemory(3);

    expect(calculator).toEqual(-3);
});
