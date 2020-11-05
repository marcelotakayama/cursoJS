const produto = new Object
produto.nome = 'Cadeira'
produto['marca'] = 'Genérica'
produto.preco = 220

console.log(produto);

delete produto.preco
delete produto['marca']
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Marcelo',
        idade: 19,
        endereco: {
            logradouro: 'Av Francisco Morato',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Júnior',
        idade: 25
    }, {
        nome: 'Ana',
        idade: 22
    }],
    calcularValorSeguro: function(){
        //conteudo da funcao
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av gigante'
console.log(carro);

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro);
console.log(carro.condutores);