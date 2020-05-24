export function saveCalls(func) {
    function withMemory() {
        calls : [func.arguments];
    }

    return withMemory;
}

const user = {
    name : 'John',
    sayHi() {
        return this.name;
    }
};

const methodWithMemory = saveCalls.apply(user.sayHi);

console.log(methodWithMemory.calls);
