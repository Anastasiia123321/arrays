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
    const randomMarksArr = [];
    for(let i = 0; i <= marks.length; i++) {
        randomMarksArr.push(marks[Math.trunc(Math.random() * marks.length)]);
    }
    return randomMarksArr;
}
const randomMarks = getRandomMarks(marks);

const getRandomMarksOfStudents = (pairsThemes, randomMarks) => {
    const marksOfStudentsArr = [];
    for(let i = 0; i < pairsThemes.length; i++) {
        marksOfStudentsArr.push([...pairsThemes[i], randomMarks[i]]);
    }
    return marksOfStudentsArr;
}
const pairsMarks = getRandomMarksOfStudents(pairsThemes, randomMarks);



const couples = getPairs(students);
console.log(couples);
const resultOfGettingTogether = getPairsWithThemes(couples, themes);
console.log(resultOfGettingTogether);
console.log(getStudentsMarks(students, marks));
console.log(pairsMarks);

