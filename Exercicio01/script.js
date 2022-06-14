/*
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, 
a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
O resultado final desse desafio deve ser algo em torno de:
*/

let firstNumber = Number(prompt("Digite um número: "));
let secondNumber = Number(prompt("Digite um número: "));

let sum = firstNumber + secondNumber;
let subtraction = firstNumber - secondNumber;
let multiplication = firstNumber * secondNumber;
let division = firstNumber / secondNumber;
let restDiv = firstNumber % secondNumber;

alert( `A soma entre os números é: ${sum}`);
alert( `A subtração entre os números é:  ${subtraction}` );
alert( `A multiplicação entre os números é:  ${multiplication}` );
alert( `A divisão entre os números é:  ${division}` );
alert( `O resto da divisão entre os números é: ${restDiv}` );

if (sum % 2 == 0) {
    alert(`A soma dos números é par:  ${sum}`)
    
} else {
    alert(`A soma dos números é ímpar:  ${sum}`)    
}

if (firstNumber == secondNumber) {
    alert(`O primeiro número: ${firstNumber} é igual ao segundo número: ${secondNumber} `)
} else {
    alert(`O primeiro número (${firstNumber}) é diferente do segundo número (${secondNumber}) `)
}

