let memory = 0;

export function add(num) {
    memory += num;
}

export function decrease(num) {
    memory -= num;
}

export function reset() {
    memory = 0;
}

export function getMemo() {
    return memory;
}

add(10);
decrease(5);
reset();
getMemo();
