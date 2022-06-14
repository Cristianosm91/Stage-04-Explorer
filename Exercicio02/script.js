/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

O resultado final desse desafio deve ser algo em torno de:
*/



const students = [
    {
        name: [],
        nota1: [],
        nota2: [],
        media: []
    },
    {
        name: [],
        nota1: [],
        nota2: [],
        media: []
    },
    {
        name: [],
        nota1: [],
        nota2: [],
        media: []
    },
    {
        name: [],
        nota1: [],
        nota2: [],
        media: []
    },
]


function Media (nota1,nota2){ 
    return (nota1 + nota2) /2;
}


for(let student of students) {

    student.name = (prompt("Digite um nome: "));
    student.nota1 = Number(prompt("Digite a nota 1: "));
    student.nota2 = Number(prompt("Digite a nota 2: "));
    student.media = Media(student.nota1,student.nota2);

    if (student.media >= 7) {
        alert(`A média do(a) aluno(a) ${student.name} é: ${student.media} \nParabéns, Você foi aprovado(a) no concurso!` )        
    } else {
        alert(`A média do(a) aluno(a) ${student.name} é: ${student.media} \nNão foi dessa vez, Tente novamente!` )        
    }

}


