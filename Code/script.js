// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


let employeesArray = [];

// Collect employee data meaning using an empty array and adding on it 
const collectEmployees = function () {

  // while loop to keep adding employee until user says no
  let user = true;
  while (user) {
    // initializing an object to store employee info
    let employee = {
      firstName: "Person",
      lastName: "Person",
      salary: 0,
    }

    // adding values to the employee object
    employee.firstName = window.prompt("Enter the employee first name.");
    employee.lastName = window.prompt("Enter the employee last name.");
    let usersalary = parseFloat(window.prompt("Enter employee salary."));


    // checking valid numbers for salary and is an integer
    if ((usersalary > 10000000000) || (usersalary < 0) || (isNaN(usersalary))) {
      usersalary = window.prompt("Please enter a valid salary.");
    }
    else {
      employee.salary = usersalary;
    }
    
    // adding the employees to the array
    employeesArray.push(employee);

    // Asking user about adding more employees
    user = window.confirm("Do you want to continue adding employees?")

  }

  // returning the employee array
  return employeesArray;

}

// When button is clicked the function runs
addEmployeesBtn.addEventListener("click", collectEmployees);

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let avg = 0;
  let length = employeesArray.length
  // for loop to iterate through and add the sum
  for (let i = 0; i < employeesArray.length; i++) {
    // convert to integer
    avg += parseFloat(employeesArray[i].salary);
    console.log(avg);
  }

  // calculating the average salary
  avg /= length;
  console.log(avg);

  return avg;
}

console.log("The average salary between " + employeesArray.length + " employee(s) $" + displayAverageSalary(employeesArray));

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  const randEmployee = Math.floor(Math.random() * employeesArray.length);
  return employeesArray[randEmployee].firstName; 
}

console.log("The random winner is " + getRandomEmployee(employeesArray));

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

// Actually calling the function to display the employees
displayEmployees(employeesArray);

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);