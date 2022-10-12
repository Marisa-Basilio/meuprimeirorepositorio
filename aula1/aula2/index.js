/*
Marisa Edna Basílio tem 33 anos,
pesa 55 kg, tem 1,55 de altura.
calcular o indice de Massa Corporal e ano de nascimento
*/
const nome = 'Marisa Edna';
const sobrenome = 'Basilio';
const idade = 33;
const peso = 55;
const alturaEmCm = 1.55;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;
indiceMassaCorporal = peso / (alturaEmCm * alturaEmCm);
anoNascimento = 2022 - idade;

//template string/
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg `)
console.log(`tem ${alturaEmCm} de altura e seu IMC é de ${indiceMassaCorporal}`);   
console.log(`${nome} nasceu em ${anoNascimento}.`)




