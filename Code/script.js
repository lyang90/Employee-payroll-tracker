// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data meaning using an empty array and adding on it 
const collectEmployees = function() {
  let employeeArray = [];

// while loop to keep adding employee until user says no
  let user = true;
    while(user){
      // initializing an object to store employee info
      let employee = {
      firstName: "Person",
      lastName: "Person",
      salary: 0
  }

      // adding values to the employee object
      employee.firstName = window.prompt("Enter the employee first name.");
      employee.lastName = window.prompt("Enter the employee last name.");
      let usersalary = window.prompt("Enter employee salary.");

      
      // checking valid numbers for salary and is an integer
      if((usersalary > 1000000000) || (usersalary < 0) || (isNaN(usersalary))){
        usersalary = window.prompt("Please enter a valid salary.");
      }
      else{
        employee.salary = usersalary;
      }

      
      employeeArray.push(employee);

      // Asking user about adding more employees
      user = window.confirm("Do you want to continue adding employees?")
     
      
    }

    // returning the employee array
    return employeeArray;
  
}




// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let num = 0;
  let avg = 0;
  const length = employeesArray.length;

  // for loop to iterate through and add the sum
  for(const i=0; i < employeesArray.length; i++){
    num += employeesArray[i];
  }

  // calculating the average salary
  avg = num / length;

  return avg;

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randEmployee = Math.floor(Math.random() * employeesArray.length);
  return employeesArray[randEmployee]; // Maybe change to console.log()
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
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