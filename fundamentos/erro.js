function tratarErroElancar(erro) {
    // throw new Error('...')
    throw {
        nome: erro.name,
        msg: erro.mensagem
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!!')
    } catch (e) {
        tratarErroElancar (e)
    } finally {
        console.log('final')
    }
    
}

const obj = { name:'Marcelo' }
imprimirNomeGritado(obj)

