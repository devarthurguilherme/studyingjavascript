function verifyNumber(num) {
    return new Promise((resolve, reject) => {
        if(num == 2) {
            resolve(console.log(`The number is ${num}`));
        } else {
            reject(new Error("Fail"));
        };
    });
};

verifyNumber(2);
verifyNumber(3);