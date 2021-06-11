var BalletFlat = /** @class */ (function () {
    function BalletFlat() {
        this.purpose = 'dancing';
    }
    return BalletFlat;
}());
var Boot = /** @class */ (function () {
    function Boot() {
        this.purpose = 'woodcutting';
    }
    return Boot;
}());
var Sneaker = /** @class */ (function () {
    function Sneaker() {
        this.purpose = 'walking';
    }
    return Sneaker;
}());
var Shoe = {
    create: function (oTyp) {
        switch (oTyp) {
            case 'balletFlat': return new BalletFlat();
            case 'boot': return new Boot();
            case 'sneaker': return new Sneaker();
            default: return { purpose: 'default' };
        }
    }
};
var myShoe = [Shoe.create('boot'), Shoe.create('sneaker'), Shoe.create('irgendwas')];
console.log.apply(console, myShoe);
