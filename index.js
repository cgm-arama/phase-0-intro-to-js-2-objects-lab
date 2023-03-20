
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value,
    };
  }
  

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }

  const employee = {
    name: 'Eric',
    age: 30,
    jobTitle: 'Software Engineer',
  };
  
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'age', 18);
  console.log(updatedEmployee);
  

  destructivelyUpdateEmployeeWithKeyAndValue(employee, 'age', 18);
  console.log(employee);
  
  const newEmployee = deleteFromEmployeeByKey(employee, 'jobTitle');
  console.log(newEmployee);
  
  destructivelyDeleteFromEmployeeByKey(employee, 'jobTitle');
  console.log(employee);
  
 
{
    name: 'Eric';
    age: 18;
    jobTitle: 'Software Engineer';
}
  

  {
    name: 'Eric';
    age: 18;
    jobTitle: 'Software Engineer';
  }
  

  {
    name: 'Eric';
    age : 18;
  }
  

  {
    name: 'Eric';
    age: 18;
  }
   
  