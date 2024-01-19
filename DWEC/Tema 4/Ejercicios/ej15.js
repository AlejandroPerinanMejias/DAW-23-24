let students = [];

let studentName = document.getElementById("studentName").value;
let studentAge = document.getElementById("studentAge").value;
let studentGrade = document.getElementById("studentGrade").value;
let studentSubjects = document.getElementById("studentSubjects").value.split(", ");

function addStudent() {
    let student = {
        name: studentName,
        age: studentAge,
        grade: studentGrade,
        subjects: studentSubjects
    };
    students.push(student);
}

function modifyStudent() {
    studentName = document.getElementById("studentName").value;
    for (let i = 0; i < students.length; i++) {
        if (students[i]["name"] == studentName) {
            students[i]["age"] = document.getElementById("studentAge").value;
            students[i]["grade"] = document.getElementById("studentGrade").value;
            students[i]["subjects"] = document.getElementById("studentSubjects").value.split(", ");
        }
    }
    console.log(students);
}

function checkStudent() {
    studentName = document.getElementById("studentName").value;
    let flag = true;
    for (let i = 0; i < students.length; i++) {
        if (students[i]["name"] == studentName) {
            flag = false;
        }
    }
    if (flag) {
        addStudent();
        modifyStudent();
    } else modifyStudent();
}

function searchStudent() {
    let studentName = document.getElementById("searchStudent").value;
    for (let i = 0; i < students.length; i++) {
        if (students[i]["name"] == studentName) {
            document.getElementById("searchResult").innerHTML = `Nombre: ${students[i]["name"]} \nEdad: ${students[i]["age"]} \nGrado: ${students[i]["grade"]} \nAsignaturas: ${students[i]["subjects"].join(", ")}`;
        }
    }
}