const students = [
    { name: "Aman", marks: 78 },
    { name: "Rohit", marks: 92 },
    { name: "Priya", marks: 85 }
];

students.sort((a, b) => b.marks - a.marks);

console.log(students);