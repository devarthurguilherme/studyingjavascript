let nome = "Arthur";
for(let i = 0; i < 10; i = i + 1) {
    
    if(i == 3) {
        nome = "Guilherme";
    }

    if(i == 5 && nome == "Guilherme") {
        console.log("O nome é Guilherme, pode parar!");
        break;
    }

    console.log(i);
}