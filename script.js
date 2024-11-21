// Initial students setup
let students = [
    { id: 1, name: 'Alice', grades: [85, 90, 78] },
    { id: 2, name: 'Bob', grades: [92, 88, 84] },
    { id: 3, name: 'Charlie', grades: [70, 75, 80] }
];

// Function implementations (addStudent, removeStudent, addGrade, calculateAverageGrade)

let addStudent = (newStudent) => {
    students.push(newStudent)
}

let removeStudent = (removeID) => {
    for(let i = 0; i < students.length; i++){
        if(students[i].id === removeID){
            delete students[i]
        }
    }
}
console.log(students)

// Example usage
addStudent({ id: 4, name: 'David', grades: [95, 89, 92] });
removeStudent(2);
// addGrade(1, 95);
// console.log(calculateAverageGrade(1));  // Output the average grade for Alice