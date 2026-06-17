const students = [
    { name: "Aman", marks: 78 },
    { name: "Rohit", marks: 92 },
    { name: "Priya", marks: 65 }
];

function getGrade(marks) {
    if (marks >= 90) return "A";
    if (marks >= 75) return "B";
    if (marks >= 60) return "C";
    return "D";
}

students.forEach(student => {
    console.log(
        `${student.name}: ${student.marks} (${getGrade(student.marks)})`
    );
});

const average =
students.reduce((sum, s) => sum + s.marks, 0)
/
students.length;

console.log("Average Marks:", average);