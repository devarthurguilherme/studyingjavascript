function plusAndDelay(a, b) {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(a + b);
        }, 3000);
    });
};

async function resultPlus(a, b, c) {
    let x = plusAndDelay(a, b);
    let y = c;

    return await x + y;
};

resultPlus(1, 2, 3).then(value => console.log(value));