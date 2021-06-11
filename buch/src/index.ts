console.log("Hello World");
let a = 1 + 2;
let b = a + 3;
let c = {
    apple: a,
    banana: b
};
let d = c.apple + 4;

type person = {
    vorname: string,
    nachname: string,
    alter: number,
    [fahrzeug: number] : string
};

let personlist : person[]=[];

personlist.push({
    vorname: 'a',
    nachname: 'b',
    alter: 49,
    1: 'VW Golf',
    2: 'Seat Alhambra',
    3: 'VW Käfer 1973'
});

console.log(...personlist);