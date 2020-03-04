"use strict";
const depts = [
    {
        id: 0,
        name: 'IT dept',
    },
    {
        id: 1,
        name: 'QA dept',
    }
];

const positions = [
    {
    deptId: 0,
    id: 0,
    salary: 10,
    name: 'Lead dev'
    },
    {
    deptId: 1,
    id: 1,
    salary: 5,
    name: 'QA engineer'
    }
];

const empls = [
    {
        id: 0,
        name: 'Ivan Ivanov',
        deptId: 0,
        positionId: 0
    },
    {
        id: 1,
        name: 'Petr Petrov',
        deptId: 1,
        positionId: 1
    },
];

function getPositionIdAndDeptIdAndEmployeeName(id) { // <- employeeId
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve([empls[id].positionId, empls[id].deptId, empls[id].name]); // -> [positionId, deptId, employeeName]
        }, 1000)
    });
}

function getDeptName(id) { // <- deptId
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(`${depts[id].name}`); // -> deptName
        }, 1000)
    });
}

function getPositionName(id) { // <- positionId
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(`${positions[id].name}`); // -> positionName
        }, 1000)
    });
}
function getEmployeeSalary(id) { // <- positionId
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(`${positions[id].salary}`); // -> employeeSalary
        }, 1000)
    });
}


function main(id) {
    getPositionIdAndDeptIdAndEmployeeName(id) // -> [positionId, deptId, employeeName]
        .then(function (result) { // <- [positionId, deptId, employeeName]
            var promiseList = [
                getPositionName(result[0]),
                getEmployeeSalary(result[0]),
                getDeptName(result[1]),
                result[2]
            ];
            return Promise.all(promiseList); // -> [positionName, employeeSalary, deptName, employeeName]
        })
        .then(function (result) { // <- [positionName, employeeSalary, deptName, employeeName]
            var positionName = result[0];
            var employeeSalary = result[1];
            var deptName = result[2];
            var employeeName = result[3];
            console.log(`${employeeName} from ${deptName} has position of ${positionName} and has salary ${employeeSalary}`);
        })
}
main(0);