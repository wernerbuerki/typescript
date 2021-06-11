type Shoe = {
    purpose: string
}

class BalletFlat implements Shoe {
    purpose = 'dancing'
}

class Boot implements Shoe {
    purpose = 'woodcutting'
}

class Sneaker implements Shoe {
    purpose = 'walking'
}

let Shoe = {
    create(oTyp: 'balletFlat' | 'boot' | 'sneaker' | string): Shoe {
        switch (oTyp)
        {
            case 'balletFlat': return new BalletFlat();
            case 'boot': return new Boot();
            case 'sneaker': return new Sneaker();
            default: return {purpose: 'default'}
        }
    }
}

let myShoe: Shoe[] = [Shoe.create('boot'),Shoe.create('sneaker'),Shoe.create('irgendwas')]
console.log(...myShoe);