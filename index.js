const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];

//task 1

const getPairs = (students) => {
    return [[students[0], students[2]], [students[1], students[3]], [students[4], students[5]]];
}



//task 2

const getPairsWithThemes = (pairs, themes) => {
    let pairsAndThemes = [];
    for (let i = 0; i < pairs.length; i++) {
        pairsAndThemes.push([pairs[i].join(' и '), themes[i]]);
    }
    return pairsAndThemes;
}



//task 3

const getStudentsMarks = (students, marks) => {
    let studentsMarks = [];
    for (let i = 0; i < students.length; i++) {
        studentsMarks.push([students[i], marks[i]]);
    }
    return studentsMarks;
}


//task 4
function getRandomMarks(marks) {
    const randomStudentsMarks = [];
    for(let i = 0; i <= marks.length; i++) {
        randomStudentsMarks.push(marks[Math.trunc(Math.random() * marks.length)]);
    }
    return randomStudentsMarks;
}
const randomPairsMarks = getRandomMarks(marks);



const getRandomPairsMarks = (pairsAndThemes,randomPairsMarks) => {
    const randomMarks = Math.floor(Math.random() * 5) + 1;
    const studentsMarks = [];
    for (let i = 0; i < pairsAndThemes.length; i++) {
        studentsMarks.push([...pairsAndThemes[i], randomPairsMarks]);
    }
    return studentsMarks;
}
const resultOfRandomMarks = getRandomPairsMarks(pairsAndThemes,randomPairsMarks);



const couples = getPairs(students);
console.log(couples);
const resultOfGettingTogether = getPairsWithThemes(couples, themes);
console.log(resultOfGettingTogether);
console.log(getStudentsMarks(students, marks));
console.log(resultOfRandomMarks);
