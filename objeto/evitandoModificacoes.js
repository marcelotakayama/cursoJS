// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})

console.log('extensivel: ', Object.isExtensible(produto));

produto.nome = 'Borracha'
produto.descricao = 'borracha escolar branca'
delete produto.tag
console.log(produto);

// Object.seal
const pessoa = { nome: 'Marcelo', idade: 19 }
Object.seal(pessoa)
console.log('selado: ', Object.isSealed(pessoa));

pessoa.sobrenome = 'Takayama'
delete pessoa.nome
pessoa.idade = 25
console.log(pessoa);