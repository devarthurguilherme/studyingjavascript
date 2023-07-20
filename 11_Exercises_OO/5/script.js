class Count {
    constructor(currentAccount, savingsAccount, fees) {
        this.currentAccount = currentAccount;
        this.savingsAccount = savingsAccount;
        this.fees = fees;
    };

    deposit(depositValue) {
        this.currentAccount = this.currentAccount + depositValue;
    };

    sack(sackValue) {
        this.currentAccount = this.currentAccount - sackValue;
    };

    savingToCurrent(sackSavings) {
        this.currentAccount = this.currentAccount + sackSavings;
        this.savingsAccount = this.savingsAccount - sackSavings;
    };

    currentToSaving(sackCurrent) {
        this.currentAccount = this.currentAccount - sackCurrent;
        this.savingsAccount = this.savingsAccount + sackCurrent;
    };

    feesOneYear() {
        let valueFees = (this.currentAccount * this.fees) / 100;
        this.savingsAccount += valueFees;
    }
};

class SpecialCount extends Count {
    constructor(currentAccount, savingsAccount, fees) {
        super(currentAccount, savingsAccount, fees*2);
    };
};

let CountArthur = new Count(110, 80, 1);


console.log(CountArthur)


CountArthur.savingToCurrent(30);
console.log(CountArthur);

CountArthur.currentToSaving(40)
console.log(CountArthur);
console.log("---")
CountArthur.feesOneYear();
console.log(CountArthur);

console.log("_________Special Count________");

let SpecialCountArthur = new SpecialCount(300, 120, 1);
console.log("The Starting", SpecialCountArthur);

SpecialCountArthur.deposit(200);
console.log(SpecialCountArthur);

SpecialCountArthur.sack(130);
console.log(SpecialCountArthur);

SpecialCountArthur.savingToCurrent(100);
console.log(SpecialCountArthur);

SpecialCountArthur.currentToSaving(200);
console.log(SpecialCountArthur);

SpecialCountArthur.feesOneYear();
console.log(SpecialCountArthur);
