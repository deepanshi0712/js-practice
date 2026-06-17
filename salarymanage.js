const employees = [
    {
        name: "Aman",
        salary: 50000
    },
    {
        name: "Rohit",
        salary: 70000
    }
];

function incrementSalary(percent) {

    employees.forEach(emp => {

        emp.salary +=
        emp.salary *
        (percent / 100);

    });

}

incrementSalary(10);

console.table(employees);