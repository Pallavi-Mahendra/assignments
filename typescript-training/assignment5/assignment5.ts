interface OrgEmployee {
    empName: string;
    empSalary: number;
    empExperience: number;
    empRating: number;
}

const employees: OrgEmployee[] = [
    { empName: "Alice Johnson", empSalary: 75000.0, empExperience: 5.1, empRating: 4.2 },
    { empName: "Bob Smith", empSalary: 68000.0, empExperience: 3.2, empRating: 3.8 },
    { empName: "Carol Davis", empSalary: 82000.0, empExperience: 7.1, empRating: 4.5 },
    { empName: "David Brown", empSalary: 90000.0, empExperience: 10.2, empRating: 2.5 },
    { empName: "Eva Green", empSalary: 60000.0, empExperience: 2.4, empRating: 3.5 }
];

const hikeMap = new Map<string, number>();

for (const employee of employees) {

    let variablePay: number;
    let bonus: number;
    let reward = 0;

    if (employee.empRating >= 4) {
        variablePay = 15.0;
        bonus = 1500;
    }
    else if (employee.empRating >= 3 && employee.empRating < 4) {
        variablePay = 10.0;
        bonus = 1200;
    }
    else {
        variablePay = 3.0;
        bonus = 300;
    }

    if (employee.empExperience >= 5) {
        reward = 5000;
    }

    // Calculate hike amount
    const hike =
        (employee.empSalary * variablePay / 100) +
        bonus +
        reward;

    // Calculate hike percentage
    const hikePercentage =
        (hike / employee.empSalary) * 100;

    // Storing employee name and hike percentage
    hikeMap.set(employee.empName, hikePercentage);
}

console.log("Employee Hike Percentage:");

for (const [name, hikePercentage] of hikeMap) {
    console.log(`${name} : ${hikePercentage}%`);
}


