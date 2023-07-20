class Car {
    
    constructor(itens, qtd, totalValue) {
        this.itens = itens;
        this.qtd = qtd;
        this.totalValue = totalValue;
    };

    addItems(item) {
        let counter = 0;

        for (let itemCar in this.itens) {
            if( this.itens[itemCar].id == item.id) {
                this.itens[itemCar].qtd += item.qtd;
                counter = 1;
            };
        };

        if(counter == 0 ) {
            this.itens.push(item)
        }
      
        this.qtd += item.qtd;
        this.totalValue += item.price * item.qtd;
    };

    removeItems(item) {
        for (let itemCar in this.itens) {
            if(this.itens[itemCar].id == item.id) {
                let obj = this.itens[itemCar];
                let index = this.itens.findIndex(function(obj) {
                    return obj.id == item.id;
                });

                this.qtd -= this.itens[itemCar].qtd;
                this.totalValue -= this.itens[itemCar].price * this.itens[itemCar].qtd;

                this.itens.splice(index, 1);

            };
        };
     
    };
};

let myCar = new Car([
    {
        id: 1,
        nome: "Camisa",
        qtd: 1,
        price: 20
    },
    {
        id: 2,
        nome: "Calça",
        qtd: 2,
        price: 50
    }
], 3, 120);

myCar.addItems({
    id: 1,
    nome: "Camisa",
    qtd: 4,
    price: 20
})

myCar.addItems({
    id: 4,
    nome: "Cap",
    qtd: 1,
    price: 5
});

myCar.removeItems({id: 1, nome: 'Camisa', qtd: 2, price: 20 })

console.log(myCar);
