class Car {
    constructor(brand, color, remanentGasoline, consumption) {
        this.brand = brand;
        this.color = color;
        this.remanentGasoline = remanentGasoline;
        this.consumption = consumption;
    };

    driving(km) {
        let quantityGasoline = km / this.consumption
        this.remanentGasoline = this.remanentGasoline - quantityGasoline;
    };

    supply(n) {
        this.remanentGasoline = this.remanentGasoline + n;
        console.log(`This gasoline now is ${this.remanentGasoline}`);
    };
};

let fiatPunto = new Car("Fiat", "Gray", 30, 10);
fiatPunto.driving(40);
fiatPunto.supply(4)
console.log(fiatPunto);
