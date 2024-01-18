// 1. Considere o seguinte array:
// const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99,
// 1290.00, 15000.00];

// a. Imprima no console o índice do primeiro salário maior que
// 7.500 utilizando o findIndex
// b. Crie uma nova lista filtrada com os salários que são maior que
// 8.000 utilizando o filter

// a)
const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99, 1290.00, 15000.00];

const maior7500 = salarios.findIndex(salario => salario > 7500);
console.log(`O índice do primeiro salario maior que 7500 é: ${maior7500}`);

if(maior7500 !== -1) {
    console.log(`O elemento encontrado foi: ${salarios[maior7500].toFixed(2)}.`);
} else {
    console.log('O elemento não foi encontrado.')
}

console.log('');

// b)

const maior8000 = salarios.filter(salario => salario > 8000);
console.log(maior8000);