import { createCalculator } from './index';

it('should check if memory value is returned', () => {
    const result = createCalculator().getMemory();

    expect(result).toEqual(0);
});
