import { createCalculator } from './index';

it('should check if counters are independent', () => {
    const calculator1 = createCalculator().addMemory(8);
    const calculator2 = createCalculator().decreaseMemory(3);

    expect(calculator1).toEqual(8);
    expect(calculator2).toEqual(-3);
});
