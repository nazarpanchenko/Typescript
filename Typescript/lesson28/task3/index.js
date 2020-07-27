export const mult = a => b => a * b;

export const twice = a => mult(a)(2);

export const triple = a => mult(a)(3);

console.log(mult(5)(4));
console.log(twice(7));
console.log(triple(9));
