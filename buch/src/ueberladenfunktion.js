let funcSum = (undefinedOrVon, undefinedOrBis) => {
    if (undefinedOrVon === undefined && undefinedOrBis === undefined) {
        return 0;
    }
    else if (undefinedOrVon instanceof Date && undefinedOrBis === undefined) {
        return 1;
    }
    else if (undefinedOrBis instanceof Date && undefinedOrBis instanceof Date) {
        return 2;
    }
    else {
        return -1;
    }
};
console.log(funcSum(new Date(), new Date()));
