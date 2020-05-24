export function saveCalls(call) {
   function WithMemory() {
        this.calls = [];    
        this.calls.push(call);

        return this.calls;
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
