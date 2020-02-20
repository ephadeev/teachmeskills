var container = document.getElementById("container");

var students = [
    {id: 1, name: "John", age: 20, grades: [2, 3, 4, 5, 2]},
    {id: 2, name: "Alex", age: 23, grades: [2, 3, 4, 3, 2]},
    {id: 3, name: "Bruce", age: 19, grades: [4, 3, 2, 5, 3]},
];

var table = createElement("table");
var tableHead = createElement("thead");
var tableBody = createElement("tbody");
var tableRow = createElement("tr");
var tableData = createElement("td");

container.appendChild(table);
table.appendChild(tableHead);
table.appendChild(tableBody);
tableHead.appendChild(tableRow);

var tableHeadContent = ["id", "Name", "Age", "Grades"];
tableRow.append(...getListContent(tableHeadContent));

tableBody.append(...addRows(students));

function createElement(tag, text) {
    var newElement = document.createElement(tag);
    if (text) {
        newElement.innerText = text;
    }
    return newElement;
}

function getListContent(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let tableHeader = createElement('th');
        tableHeader.append(arr[i]);
        result.push(tableHeader);
    }
    return result;
}

function addRows(arr) {
    let row = [];
    arr.forEach(function (student) {
        let tableRow = createElement("tr");

        let data = [];
        Object.values(student).forEach(function (item) {
           let tableData = createElement("td");
           tableData.append(item);
           data.push(tableData);
        });
        tableRow.append(...data);
        row.push(tableRow);
    });
    return row;
}