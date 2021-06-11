
type Summierung = {
    () : number,
    (von: Date): number,
    (von: Date, bis: Date) : number   
} 


let funcSum : Summierung = (
    undefinedOrVon? : Date | undefined,
    undefinedOrBis? : Date | undefined
) => {
    if (undefinedOrVon === undefined && undefinedOrBis === undefined) {
        return 0;
    }
    else if (undefinedOrVon instanceof Date && undefinedOrBis === undefined)
    {
        return 1;
    } 
    else if (undefinedOrBis instanceof Date && undefinedOrBis instanceof Date)
    {
        return 2;
    } 
    else
    {
        return -1;
    }
}

console.log(funcSum(new Date(), new Date()));