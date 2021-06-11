function* gen(): IterableIterator<number> {
    let i = 0;
    while (1) {
        yield i++;
    }
} 

let it = gen();
console.log(it.next());
it.next();
it.next();
it.next();
console.log(it.next());