// PAR NOME/VALOR

const saudacao = 'Olá' //Contexto léxico 1

function exec() {
    const saudacao = 'Falaaaa'  // Contexto lógico 2
    return saudacao
}

// OBJETOS SÃO GRUPOS ANINHADOS DE PARES NOME/VALOR
const cliente = {
    nome: 'Marcelo',
    idade: 18,
    peso: 70,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)