let valor // Variável que não foi inicializada
console.log(valor)

valor = null // Ausência de valor
console.log(valor)

const produto = {}

console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)