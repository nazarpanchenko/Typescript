export function saveCalls(...call) {
   function WithMemory() {
        let calls = [];

        calls.push(call);
        return calls;
   }

   return WithMemory;
}

const user = {
    name : 'John',
    sayHi() {
        return this.name;
    }
};

const methodWithMemory = saveCalls(user.sayHi);

console.log(methodWithMemory.apply({ name : 'Tom' }));

// console.log(methodWithMemory.calls);
