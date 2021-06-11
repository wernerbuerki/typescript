var filter = function (array, f) {
    var retArray = [];
    for (var i = 0; i < array.length; i++) {
        if (f(array[i]))
            retArray.push(array[i]);
    }
    return retArray;
};
var func1 = filter([1, 2, 3, 4, 5, 6, 7], function (_) { return _ < 5; });
var func2 = filter(['a', 'a', 'b', 'c'], function (_) { return _ === 'a'; });
console.log.apply(console, func1);
console.log.apply(console, func2);
