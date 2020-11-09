console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Marcelo', 'João', 'Danilo')
console.log(aprovados);

aprovados = ['Marcelo', 'João', 'Danilo']
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados[3] = 'Paulo'
aprovados.push('Julia')
console.log(aprovados.length);

aprovados[9] = 'Rafael'
console.log(aprovados.length);

console.log(aprovados[8] === undefined);

console.log(aprovados);
aprovados.sort()
console.log(aprovados);

delete aprovados[1]
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['Marcelo', 'João', 'Danilo']
aprovados.splice(1, 2, 'elemento1', 'elemento2')
console.log(aprovados);