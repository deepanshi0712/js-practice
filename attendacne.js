const students = [
    { name: "Aman", present: true },
    { name: "Rohit", present: false },
    { name: "Priya", present: true },
    { name: "Karan", present: true }
];

function attendanceReport() {

    const presentStudents =
        students.filter(s => s.present);

    const absentStudents =
        students.filter(s => !s.present);

    console.log("Present:");
    presentStudents.forEach(s =>
        console.log(s.name)
    );

    console.log("Absent:");
    absentStudents.forEach(s =>
        console.log(s.name)
    );

    console.log(
        `Attendance: ${presentStudents.length}/${students.length}`
    );
}

attendanceReport();