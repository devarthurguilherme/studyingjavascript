class Address {
    constructor(userName, street, neighborhood, city, district) {
        this.userName = userName;
        this.street = street;
        this.neighborhood = neighborhood;
        this.city = city;
        this.district = district;
    };

    completeAddress() {
        console.log(`The ${this.userName} lives in: ${this.street}, ${this.neighborhood}, ${this.city}, ${this.district}`);
    }

    setStreet(newStreet) {
        this.street = newStreet;
    }
};

let Arthur = new Address("Arthur Guilherme", "Rua da Estrela", "Nine", "Vila Nova de Famalicão", "Braga");
Arthur.setStreet("Sezures");
console.log(Arthur);
Arthur.completeAddress();