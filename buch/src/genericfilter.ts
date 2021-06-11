type Filter = {
    <T>(arr: T[], f: (item: T) => boolean):T[]
}

let filter: Filter =(array,f) => {
    
    let retArray = [];

    for (let i=0; i < array.length; i++) {
        if (f(array[i])) retArray.push(array[i]);
    }

    return retArray;
}

let func1 = filter([1,2,3,4,5,6,7],_ => _ < 5);
let func2 = filter(['a','a','b','c'], _ => _ === 'a');

console.log(...func1);
console.log(...func2);