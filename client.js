const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  }, //bonus should be 9
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },//bonus should be 6
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },//bonus should be 13
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  }, //bonus should be 0
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  } //bonus should be 0
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

function bonusCalculator(people){
  let bonusPercentage = 0;    //if rating is <= 2 add 0 to bonus percentage 
  if( people.reviewRating <= 2 ){
     bonusPercentage += 0;
    console.log("in if people.reviewRating <= 2");
  } // end if: 2

    //else if rating <= 3 add 4 to bonus percentage 
  else if( people.reviewRating === 3 ){
    bonusPercentage += 4;
    console.log("in if people.reviewRating === 3");
  } // end if: 3
    
    // else if rating <= 4  add 6 o bonus percentage
  else if( people.reviewRating === 4 ){
    bonusPercentage += 6;
    console.log("in if people.reviewRating === 4");
  } // end if: 4
    //else if rating <= 5 add 10 to bonus percentage
  else if( people.reviewRating === 5 ){
    bonusPercentage += 10;
    console.log("in people.reviewRating === 5");

  } // end if: 5
  if(people.employeeNumber.length === 4){
    bonusPercentage += 5;
    console.log("in if Number(people.employeeNumber.length) === 4");
  }
  if(Number(people.annualSalary) > 65000 ){
    bonusPercentage -= 1;
    console.log("in Number(people.annualSalary) > 65000");
  }
  if( bonusPercentage > 13 ){
    bonusPercentage = 13;
    console.log("in bonusPercentage > 13");
  }
  else if( bonusPercentage < 0 ){
    bonusPercentage = 0;
    console.log("in bonusPercentage < 0");
  }
  console.log( "this employee gets a " + bonusPercentage + "% bonus!")
  return bonusPercentage;
} // end bonusCalculator 
 
console.log(bonusCalculator( employees[0] ));
console.log(bonusCalculator( employees[1] ));
console.log(bonusCalculator( employees[2] ));
console.log(bonusCalculator( employees[3] ));
console.log(bonusCalculator( employees[4] ));

//if employeenumber.length 
// if employee.salary >= 65000, subtract 1 from bonus percentage
