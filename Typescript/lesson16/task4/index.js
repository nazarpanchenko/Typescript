let foo = 1; 

function bar() { 
    if (!foo) { 
        var foo = 10; 
    } 

    return foo;
}

let foo = bar();

export { let };