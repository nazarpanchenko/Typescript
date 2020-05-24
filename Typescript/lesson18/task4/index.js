export function saveCalls(call) {
   return function WithMemory() {
       this.calls = [];
       this.calls.push(...arguments);

       return this.calls;
   }
}

const user = {
    name : 'John',
    sayHi() {
        return this.name;
    }
};

const methodWithMemory = saveCalls(user.sayHi);

console.log(methodWithMemory.apply({ name : 'Tom' }));

console.log(methodWithMemory.calls);
