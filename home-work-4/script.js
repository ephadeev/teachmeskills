/*
    <div id="container">
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Grades</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Bob</td>
                    <td>18</td>
                    <td>1,2,3,4</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Bob</td>
                    <td>26</td>
                    <td>5,2,3,4</td>
                </tr>
            </tbody>
        </table>
    </div>
*/

// 2.
var students = [
    {id: "id", name: "Name", age: "Age", grades: "Grades"},
    {id: 1, name: "John", age: 20, grades: [2, 3, 4, 5, 2]},
    {id: 2, name: "Alex", age: 23, grades: [2, 3, 4, 3, 2]},
    {id: 3, name: "Bruce", age: 19, grades: [4, 3, 2, 5, 3]},
];
// мы должны пробегаться по массиву с данными

/* 3. Создаём тег <table> */

/* 4. Создаём тег <thead> внутри thead создаём <tr>, а внутри tr -> <td> с текстом (см конечный результат)
    'id', 'name' и тд */

/* 5.  пробегаемся по массиву (шаг 2) и создаём <tr> внутри которых лежат соответствующие значения id, name и тд
Не забываем про стили в файле css -- хотя бы border сделайте */