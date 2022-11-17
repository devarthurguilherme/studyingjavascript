let pessoa = {
    nome: 'Arthur'
}

let pessoa2 = pessoa;
console.log(pessoa == pessoa2);

pessoa2.nome = "Guilherme";

console.log(pessoa.nome)