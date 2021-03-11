const user = {
    name:'Joao',
    lastName:'Vitor'
};

function getFullname(user) {
    return{
        ...user,//' ... ' cada propriedade de 'user' é colocada no objeto 'fullName';
        fullName: `${user.name} ${user.lastName}`
    }
}

const userFullName = getFullname(user);

console.log(userFullName);

const students = [
    {
        name:'Grace',
        grade: 7
    },
    {
        name:'Jeniffer',
        grade: 4
    },
    {
        name: 'Paul',
        grade: 10
    },
];

function getAproved(studentsList) {
    return studentsList.filter(student => student.grade >= 7);
}
console.log('Alunos aprovados: ')
console.log(getAproved(students));

console.log('\nLista de alunos: ')
console.log(students);