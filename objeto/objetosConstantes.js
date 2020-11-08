// pessoa -> 123 -> {...}
const pessoa = {nome: 'Marcelo'}
pessoa.nome = 'Pedro'
console.log(pessoa);

// pessoa <- 456 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome='maria'
pessoa.endereco='rua legal'
console.log(pessoa.nome);
console.log(pessoa.endereco);

// a funcao freeze congela o objeto, ou seja, torna ele numa constante

const pessoaConstante = Object.freeze({nome: 'Marcelo'})
pessoaConstante.nome = 'maria'
console.log(pessoaConstante);