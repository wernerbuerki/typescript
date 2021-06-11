var is = function () {
    var p = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        p[_i] = arguments[_i];
    }
    var ret = true;
    for (var i = 0; i < p.length - 1; i++) {
        if (p[i] != p[i + 1])
            ret = false;
    }
    return ret;
};
var is2 = function () {
    var p = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        p[_i] = arguments[_i];
    }
    var ret = true;
    for (var i = 0; i < p.length - 1; i++) {
        if (p[i] != p[i + 1])
            ret = false;
    }
    return ret;
};
/*
function is<T>(a: T, ...b: [T, ...T[]]): boolean {
  return b.every(_ => _ === a)
}
*/
console.log(is('string1', 'string2'));
console.log(is(true, false));
console.log(is(42, 42, 42));
console.log(is2([1], [1, 2], [1, 2, 3]));
