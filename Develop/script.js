// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  
let test = true
let employeeList = []

while (test){
let employeeFirstName = prompt("Please Enter Your First Name")
let employeeLastName = prompt("Please Enter Your Last Name")
let employeeSalary = prompt("Please Enter Your Salary")

let empobj = {
    FirstName: employeeFirstName,
    lastName: employeeLastName,
    salary: employeeSalary
  }

employeeList.push (empobj)
test = confirm("Would you like to continue?")
}

console.log(employeeList)
return employeeList;
// dataType employeeInfo[] = new dataType[2]
// TODO: Get user input to create and return an array of employee objects
}


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  
  console.log(employeesArray)

  // TODO: Calculate and display the average salary
}
console.log(displayAverageSalary)

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
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


// // Function Definition
// // Parameters --> num1, num2
// function sum(num1, num2){

// }

// // Function Call
// sum(100, 200)

// let userList = [
//   {
//     name: "Daniel",
//     age: 27
//   },
//   {
//     name: "John",
//     age: 35
//   }
// ]

// let allAgeSum = 0

// for (let i = 0; i < userList.length; i++) {
//   allAgeSum = allAgeSum + userList[i].age
//   console.log(allAgeSum);
// }



// console.log();