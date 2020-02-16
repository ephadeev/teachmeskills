var student1 = {
    firstName: "Richard",
    lastName: "Hendricks",
    age: 19,
    grades: [4, 2, 2, 2, 4],
    course: 1,
    gender: "male",
};

var student2 = {
    firstName: "Erlich",
    lastName: "Bachman",
    age: 19,
    grades: [1, 2, 3, 4, 5],
    course: 1,
    gender: "male",
};

var student3 = {
    firstName: "Nelson",
    lastName: "Bighetti",
    age: 19,
    grades: [1, 2, 3, 4, 5],
    course: 1,
    gender: "male",
};

var student4 = {
    firstName: "Bertram",
    lastName: "Gilfoyle",
    age: 19,
    grades: [1, 2, 3, 4, 5],
    course: 1,
    gender: "male",
};

var student5 = {
    firstName: "Dinesh",
    lastName: "Chugtai",
    age: 19,
    grades: [1, 2, 3, 4, 5],
    course: 1,
    gender: "male",
};

var student6 = {
    firstName: "Peter",
    lastName: "Gregory",
    age: 19,
    grades: [1, 2, 3, 4, 5],
    course: 1,
    gender: "male",
};

var student7 = {
    firstName: "Monica",
    lastName: "Hall",
    age: 19,
    grades: [1, 2, 3, 3, 2],
    course: 1,
    gender: "female",
};

var student8 = {
    firstName: "Donald",
    lastName: "Dunn",
    age: 19,
    grades: [1, 2, 3, 4, 5],
    course: 1,
    gender: "male",
};

var student9 = {
    firstName: "Gavin",
    lastName: "Belson",
    age: 19,
    grades: [4, 4, 4, 4, 4],
    course: 1,
    gender: "male",
};

var student10 = {
    firstName: "Russ",
    lastName: "Hanneman",
    age: 19,
    grades: [1, 1, 2, 2, 1],
    course: 1,
    gender: "male",
};

var students = [student1, student2, student3, student4, student5, student6, student7, student8, student9, student10];

for (let prop of students) {

    let sumGrades = 0;
    for (let i = 0; i < prop.grades.length; i++) {
        sumGrades += prop.grades[i];
    }
    var averageGrade = sumGrades / prop.grades.length;

    if (averageGrade < 3 && prop.gender === "male" && prop.age >= 18 && prop.age <= 27) {
        prop.isReadyForArmy= true;
        delete prop.grades;
        delete prop.course;
    }
}

var goToArmy = [];

for (let prop of students) {
    if (prop.isReadyForArmy === true) {
        goToArmy.push(prop);
    }
}

console.log(goToArmy);