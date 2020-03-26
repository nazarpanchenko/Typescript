import { createCalculator } from './index';

it('should check memory value', () => {
    const calculator1 = createCalculator().addMemory(8);
    const calculator2 = createCalculator().decreaseMemory(3);
    const result = createCalculator().getMemory();

    expect(result).toEqual(0);
});
