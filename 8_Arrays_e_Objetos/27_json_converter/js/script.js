let pessoa = {
    "nome": "Arthur",
    "idade": 30,
    "profissao": "developer"
}

let pessoaText = JSON.stringify(pessoa);
console.log(pessoaText)

let pessoaJSON = JSON.parse(pessoaText);
console.log(pessoaJSON);