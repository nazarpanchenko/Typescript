export function saveCalls(...call) {
   const WithMemory = () => {
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
