type Assert = {
    <T>(...par: T[]): boolean
}

let is: Assert = (...p) => {
    let ret = true;
    for(let i=0; i < p.length - 1; i++){
        if (p[i] != p[i+1]) ret = false;
    }
    return ret;
}


let is2: <T>(...par: T[]) => boolean = function (...p) : boolean {
        let ret = true;
        for(let i=0; i < p.length - 1; i++){
            if (p[i] != p[i+1]) ret = false;
        }
        return ret;
    }

/*
function is<T>(a: T, ...b: [T, ...T[]]): boolean {
  return b.every(_ => _ === a)
}
*/

console.log(is('string1','string2'));
console.log(is(true,false));
console.log(is(42,42,42));
console.log(is2([1],[1,2],[1,2,3]));