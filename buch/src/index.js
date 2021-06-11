console.log("Hello World");
var a = 1 + 2;
var b = a + 3;
var c = {
    apple: a,
    banana: b
};
var d = c.apple + 4;
var personlist = [];
personlist.push({
    vorname: 'a',
    nachname: 'b',
    alter: 49,
    1: 'VW Golf',
    2: 'Seat Alhambra',
    3: 'VW Käfer 1973'
});
console.log.apply(console, personlist);
