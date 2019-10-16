

class Cercle{
    constructor(rayon){
        this.rayon = rayon;
    }

    get area(){
        return this.calcArea();
    }

    calcArea(){
        return Math.pow(this.rayon, 2) * Math.PI;
    }

    get perimeter(){
        return this.calcPerimeter();
    }

    calcPerimeter(){
        return this.rayon * Math.PI * 2
    }
}

const rond = new Cercle(10);
console.log("l'air est:", rond.area)
console.log("le perimetre est:", rond.perimeter)
