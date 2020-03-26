import { createCalculator } from './index';

it('should check if value is added to memory', () => {
    const result = createCalculator().addMemory(8);

    expect(result).toEqual(8);
});

it('should check if value is decreased from memory', () => {
    const result = createCalculator().decreaseMemory(3);

    expect(result).toEqual(-3);
});

it('should check if memory is set to zero', () => {
    const result = createCalculator().resetMemory();

    expect(result).toEqual(0);
});

it('should check if memory value is returned', () => {
    const result = createCalculator().getMemory();

    expect(result).toEqual(0);
});
