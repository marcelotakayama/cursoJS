// novo recurso do ES 2015

const pessoa = {
    nome: 'ana',
    idade: 20,
    endereco: {
        rua: "Rua ABC",
        numero: 123
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome:n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { rua, numero, cep } } = pessoa
console.log(rua, numero, cep)