// Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando
// pergunte para ele o salário que está ganhando. Para cada pessoa

// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000

let pessoas = [];
let continuarCadastro;

do {

    const pessoa = {
        nome: '',
        idade: 0,
        trabalhando: true,
        salario: 0,
    }

    pessoa.nome = prompt('Informe o seu nome: ');
    pessoa.idade = parseInt(prompt('Informe sua Idade: '));
    pessoa.trabalhando = confirm('Esta trabalhando?');

    if(pessoa.trabalhando) {
        pessoa.salario = parseFloat(prompt('Qual o seu salario?'));
    }

    pessoas.push(pessoa);
    continuarCadastro = confirm('Continuar Cadastro?');

} while(continuarCadastro)

const desempregadas = pessoas.filter(pessoa => !pessoa.trabalhando);
const menor2500 = pessoas.filter(pessoa => pessoa.trabalhando && pessoa.salario < 2500);
const maior2500 = pessoas.filter(pessoa => pessoa.trabalhando && pessoa.salario >= 2500);

console.log('Pessoas Desempregadas:');
desempregadas.forEach(pessoa => console.log(`Nome: ${pessoa.nome}, idade: ${pessoa.idade}`));

console.log('Pessoas empregadas com salários menores que 2500:');
menor2500.forEach(pessoa => console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`));

console.log('Pessoa empregadas com salário maior que 2500:');
maior2500.forEach(pessoa => console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`));